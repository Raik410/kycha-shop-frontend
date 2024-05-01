import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

export const useAuthRedirect = () => {
  const { user } = useAuth();

  // if (!user) return null;

  const { replace } = useRouter();

  useEffect(() => {
    replace('/');
  }, [user]);
};
