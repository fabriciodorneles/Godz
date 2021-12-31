import Head from 'next/head';
import styles from './who.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Godz</title>
      </Head>
      <header className={styles.headerContainer}>
        <nav>
          <a href="./">
            {/* <img src="/images/question_icon.svg" alt="ig.news" /> */}
          </a>
        </nav>
      </header>
      <div className={styles.mainContainer}>
        <img src="/images/who.svg" alt="ig.news" />
      </div>
    </>
  );
}
