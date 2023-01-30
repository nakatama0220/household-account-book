import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../src/template/AuthContextProvider';
import { global } from '../styles/global';
import { reset } from '../styles/reset';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={global} />
      <Global styles={reset} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
