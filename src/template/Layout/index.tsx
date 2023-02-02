import Head from 'next/head';
import type { FC } from 'react';
import { Header } from '../../organisms/Header';
import { styles } from './styles';

export type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>リスト</title>
      </Head>
      <Header />
      <main css={styles.main}>{children}</main>
    </div>
  );
};
