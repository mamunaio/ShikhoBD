'use client';

import { useSession } from 'next-auth/react';

export const useAuth = () => {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    role: (session?.user as any)?.role,
    userId: (session?.user as any)?.id,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
  };
};
