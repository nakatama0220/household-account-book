import { useCallback } from 'react';
import supabase from '../../../utils/supabase';

type HandleLogout = () => void;
type Hooks = {
  handleLogout: HandleLogout;
};

export const useHooks = (): Hooks => {
  const handleLogout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }, []);

  return {
    handleLogout,
  };
};
