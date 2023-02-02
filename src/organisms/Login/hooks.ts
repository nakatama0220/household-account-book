import { useCallback, useState, ChangeEvent, useEffect } from 'react';
import supabase from '../../../utils/supabase';

type FormValue = {
  email: string;
  password: string;
};
type HandleChange = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleSignIn = (value: FormValue) => void;
type HandleSignUp = (value: FormValue) => void;
type Hooks = {
  formValue: FormValue;
  handleChange: HandleChange;
  handleSignIn: HandleSignIn;
  handleSignUp: HandleSignUp;
};

export const useHooks = (): Hooks => {
  const [formValue, setFormValue] = useState<FormValue>({
    password: '',
    email: '',
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSignIn = useCallback(async (value: FormValue) => {
    const { data } = await supabase.auth.signInWithPassword({
      email: value.email,
      password: value.password,
    });
    if (!data.session) return;
    supabase.auth.setSession(data.session);
  }, []);

  const handleSignUp = useCallback(async (value: FormValue) => {
    const { data } = await supabase.auth.signUp({
      email: value.email,
      password: value.password,
    });
    if (!data.session) return;
    supabase.auth.setSession(data.session);
  }, []);

  return {
    formValue,
    handleChange,
    handleSignIn,
    handleSignUp,
  };
};
