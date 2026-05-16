import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './lib/mongodb-client'; // We'll need to create this for the adapter
import { authConfig } from './auth.config';
import User from './models/User';
import { connectDB } from './lib/connectDB';
import bcrypt from 'bcryptjs';

export const { 
  handlers: { GET, POST }, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  debug: true,
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  ...authConfig,
  adapter: MongoDBAdapter(clientPromise),



  session: { strategy: 'jwt' },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET || process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials;

        if (!email || !password) return null;

        const user = await User.findOne({ email });
        if (!user || !user.passwordHash) return null;

        if (!user.isActive) throw new Error('Account suspended');

        const isMatch = await bcrypt.compare(password as string, user.passwordHash);
        if (!isMatch) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          image: user.avatarUrl,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
});
