import type { FC, ReactNode } from 'react';
import { Login } from '../../organisms/Login';
import { PasswordChange } from '../../organisms/PasswordChange';
import { useHooks } from './hooks';

type Props = {
  children: ReactNode;
};

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const { session, user, hasIncludePath } = useHooks();
  if (hasIncludePath) return <PasswordChange />;
  if (!session || !user) return <Login />;
  return <>{children}</>;
};
