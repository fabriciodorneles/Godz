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
        <iframe title="TopDown Shooter" src="jogos/index.html" width="600" height="400" scrolling="no" />
        <div className={styles.instructionsGame}>
          Use as setas para se mover e mouse para mirar e atirar.
        </div>
      </div>
    </>
  );
}
