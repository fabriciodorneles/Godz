import { AppProps } from 'next/app';
import '../styles/global.scss';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <Component />
  );
}

export default MyApp;
