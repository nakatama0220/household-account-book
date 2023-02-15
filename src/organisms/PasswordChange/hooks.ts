import { useRouter } from 'next/router';
import { useCallback, useState, ChangeEvent } from 'react';
import supabase from '../../../utils/supabase';

type HandleChange = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleSend = (password: string) => void;
type Hooks = {
  passwordValue: string;
  handleChange: HandleChange;
  handleSend: HandleSend;
};

export const useHooks = (): Hooks => {
  const [passwordValue, setPasswordValue] = useState<string>('');
  const router = useRouter();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  }, []);

  const handleSend = useCallback(
    async (password: string) => {
      await supabase.auth.updateUser({ password });
      router.push('.');
      setPasswordValue('');
    },
    [router],
  );

  return {
    handleChange,
    handleSend,
    passwordValue,
  };
};
