import Head from 'next/head';
import { Header } from '../components/Header';
import styles from './how.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Godz</title>
      </Head>
      <Header />
      <div className={styles.mainContainer}>

        <a href="https://twitter.com/profetaeterno?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @profetaeterno</a>
        <script async src="https://platform.twitter.com/widgets.js" />
      </div>
    </>
  );
}
