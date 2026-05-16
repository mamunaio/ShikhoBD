'use server';

import { signIn } from '@/auth';
import { connectDB } from '@/lib/connectDB';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { sendVerificationEmail } from '@/lib/email';
import { AuthError } from 'next-auth';

export async function registerUser(prevState: any, formData: FormData) {
  try {
    await connectDB();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const role = formData.get('role') as string || 'student';

    if (!name || !email || !password) {
      return { error: 'সবগুলো ঘর পূরণ করুন।' };
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { error: 'এই ইমেইলটি ইতিমধ্যে ব্যবহার করা হয়েছে।' };
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    await User.create({
      name,
      email,
      passwordHash,
      role,
      isVerified: false,
      // We can store verificationToken in a separate collection or in user model if extended
    });

    // Try to send email but don't block registration if it fails (useful for dev)
    try {
      await sendVerificationEmail(email, verificationToken);
    } catch (emailError) {
      console.warn('Verification email failed to send:', emailError);
    }

    return { success: 'নিবন্ধন সফল হয়েছে! (ইমেইল ভেরিফিকেশন স্কিপ করা হয়েছে)।' };
  } catch (error) {
    console.error('Registration error:', error);
    return { error: 'কিছু একটা সমস্যা হয়েছে। আবার চেষ্টা করুন।' };
  }
}

export async function authenticate(prevState: any, formData: FormData) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'ইমেইল বা পাসওয়ার্ড সঠিক নয়।' };
        default:
          return { error: 'লগইন করতে সমস্যা হচ্ছে।' };
      }
    }
    throw error;
  }
}
