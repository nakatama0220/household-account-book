import { useCallback, useState, ChangeEvent, useEffect } from 'react';
import supabase from '../../../utils/supabase';

type FormValue = {
  email: string;
  password: string;
};
type HandleChange = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleSignIn = (value: FormValue) => void;
type HandleSignUp = (value: FormValue) => void;
type HandleOpen = () => void;
type HandleMailAddressResetChange = (e: ChangeEvent<HTMLInputElement>) => void;
type HandleSendPasswordReset = (mailAddress: string) => void;
type Hooks = {
  formValue: FormValue;
  handleChange: HandleChange;
  handleSignIn: HandleSignIn;
  handleSignUp: HandleSignUp;
  isPasswordReset: boolean;
  resetMailAddress: string;
  handleOpen: HandleOpen;
  handleMailAddressResetChange: HandleMailAddressResetChange;
  handleSendPasswordReset: HandleSendPasswordReset;
};

export const useHooks = (): Hooks => {
  const [formValue, setFormValue] = useState<FormValue>({
    password: '',
    email: '',
  });
  const [isPasswordReset, setIsPasswordReset] = useState<boolean>(false);
  const [resetMailAddress, setResetMailAddress] = useState<string>('');

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

  const handleOpen = useCallback(() => {
    setIsPasswordReset((prev) => !prev);
  }, []);

  const handleMailAddressResetChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setResetMailAddress(e.target.value);
  }, []);

  const handleSendPasswordReset = useCallback(async (mailAddress: string) => {
    await supabase.auth.resetPasswordForEmail(mailAddress, {
      redirectTo: 'http://localhost:3000/passwordChange/',
    });
    setIsPasswordReset(false);
    setResetMailAddress('');
  }, []);

  return {
    formValue,
    handleChange,
    handleSignIn,
    handleSignUp,
    handleOpen,
    handleMailAddressResetChange,
    handleSendPasswordReset,
    isPasswordReset,
    resetMailAddress,
  };
};
