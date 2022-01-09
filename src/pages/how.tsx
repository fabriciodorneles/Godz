import Head from 'next/head';
import { ProphetProfile } from '../components/ProphetProfile';
import styles from './how.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Godz</title>
      </Head>
      <header className={styles.headerContainer}>
        <nav>
          <a href="./who">
            {/* <img src="/images/question_icon.svg" alt="ig.news" /> */}
          </a>
        </nav>
      </header>
      <ProphetProfile />
    </>
  );
}
