import { createContext, FC, ReactNode } from 'react';
import type { Session, User } from '../../@types/session';
import { Login } from '../../organisms/Login';
import { useHooks } from './hooks';

type Props = {
  children: ReactNode;
};

type AuthContextProps = { session: Session | null; user: User | null };

const AuthContext = createContext<AuthContextProps>({ session: null, user: null });
export const AuthContextProvider: FC<Props> = ({ children }) => {
  const { session, user } = useHooks();
  if (!session || !user) return <Login />;
  return (
    <AuthContext.Provider value={{ session: session, user: user }}>{children}</AuthContext.Provider>
  );
};
