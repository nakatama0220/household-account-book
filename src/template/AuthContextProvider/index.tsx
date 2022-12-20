// eslint-disable-next-line import/named
import { FC, ReactNode } from 'react';
import { Login } from '../../organisms/Login';
import { useHooks } from './hooks';

type Props = {
  children: ReactNode;
};

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const { session, user } = useHooks();
  if (!session || !user) return <Login />;
  return <>{children}</>;
};