import type { FC } from 'react';
import { useHooks } from './hooks';
import { styles } from './styles';

export const Header: FC = () => {
  const { handleLogout } = useHooks();
  return (
    <header css={styles.header}>
      <span css={styles.text}>家計簿アプリ</span>
      <button type="button" css={styles.button} onClick={handleLogout}>
        ログアウト
      </button>
    </header>
  );
};
