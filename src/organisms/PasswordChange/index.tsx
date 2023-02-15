import { Button, Input } from '@chakra-ui/react';
import type { FC } from 'react';
import { useHooks } from './hooks';
import { styles } from './styles';

export const PasswordChange: FC = () => {
  const { handleChange, handleSend, passwordValue } = useHooks();
  return (
    <form>
      <Input
        name="password"
        placeholder="password"
        css={styles.input}
        onChange={handleChange}
        value={passwordValue}
      />
      <Button colorScheme="teal" onClick={() => handleSend(passwordValue)}>
        パスワードをリセット
      </Button>
    </form>
  );
};
