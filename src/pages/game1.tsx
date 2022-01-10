import Head from 'next/head';
import styles from './game1.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Godz</title>
      </Head>
      <header className={styles.headerContainer}>
        <nav>
          <a href="./how">
            {/* <img src="/images/question_icon.svg" alt="ig.news" /> */}
          </a>
        </nav>
      </header>
      <div className={styles.gameFrame}>
        <iframe title="TopDown Shooter" src="jogos/index.html" width="335" height="500" scrolling="no" />
      </div>
    </>
  );
}
