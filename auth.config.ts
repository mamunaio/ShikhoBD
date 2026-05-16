import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isAuthPage = nextUrl.pathname.startsWith('/auth');
      const isDashboardPage = nextUrl.pathname.startsWith('/dashboard');
      const isLearnPage = nextUrl.pathname.startsWith('/learn');
      const isCheckoutPage = nextUrl.pathname.startsWith('/checkout');
      const isAdminApi = nextUrl.pathname.startsWith('/api/admin');

      if (isDashboardPage || isLearnPage || isCheckoutPage) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      }

      if (isAuthPage) {
        if (isLoggedIn) {
          return Response.redirect(new URL('/dashboard/student', nextUrl));
        }
        return true;
      }

      return true;
    },
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
