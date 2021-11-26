import { Header } from 'src/components/Header';
import { AppProps } from 'next/app';
import 'src/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
