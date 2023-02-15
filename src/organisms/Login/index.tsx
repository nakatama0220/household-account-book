import { Input, Button } from '@chakra-ui/react';
import type { FC } from 'react';
import { useHooks } from './hooks';
import { styles } from './styles';

export const Login: FC = () => {
  const {
    formValue,
    handleChange,
    handleSignIn,
    handleSignUp,
    handleOpen,
    handleMailAddressResetChange,
    handleSendPasswordReset,
    isPasswordReset,
    resetMailAddress,
  } = useHooks();
  return (
    <form css={styles.root}>
      <Input
        name="email"
        placeholder="email"
        css={styles.input}
        onChange={handleChange}
        value={formValue.email}
      />
      <Input
        name="password"
        placeholder="password"
        css={styles.input}
        onChange={handleChange}
        value={formValue.password}
      />
      <Button colorScheme="teal" onClick={() => handleSignUp(formValue)}>
        singUp
      </Button>
      <Button colorScheme="teal" onClick={() => handleSignIn(formValue)}>
        singIn
      </Button>
      <Button colorScheme="teal" onClick={handleOpen}>
        パスワードをリセットする
      </Button>
      {isPasswordReset && (
        <div>
          <Input
            name="password"
            placeholder="password"
            css={styles.input}
            onChange={handleMailAddressResetChange}
            value={resetMailAddress}
          />
          <Button colorScheme="teal" onClick={() => handleSendPasswordReset(resetMailAddress)}>
            リセットメールを送る
          </Button>
        </div>
      )}
    </form>
  );
};
