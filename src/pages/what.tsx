import Head from 'next/head';
import { LetterAnim } from '../components/LetterAnim';
import styles from './what.module.scss';

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
      <div>
        <LetterAnim />
      </div>
    </>
  );
}
