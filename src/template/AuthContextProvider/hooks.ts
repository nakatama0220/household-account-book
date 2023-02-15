import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import supabase from '../../../utils/supabase';
import type { Session, User } from '../../@types/session';

type Hooks = {
  session: Session | null;
  user: User | null;
  hasIncludePath: boolean;
};
export const useHooks = (): Hooks => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const hasIncludePath = useMemo(() => {
    return router.pathname === '/passwordChange';
  }, [router.pathname]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabaseauth event: ${event}`);
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription;
    };
  }, []);

  return {
    session,
    user,
    hasIncludePath,
  };
};
