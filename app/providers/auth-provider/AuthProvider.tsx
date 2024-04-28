import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { getAccessToken } from '@/service/auth/auth.helper';
import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';
import { TypeComponentAuthFields } from './auth-page.types';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  const { user }: any = useAuth(); // fix
  const { checkAuth, loggout } = useActions();
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      checkAuth();
    }
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken && user) {
      loggout();
    }
  }, [pathname]);

  return isOnlyUser ? (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  ) : (
    <>{children}</>
  );
};

export default AuthProvider;
