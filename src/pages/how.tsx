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
      {/* <a className="twitter-timeline" href="https://twitter.com/profetaeterno?ref_src=twsrc%5Etfw">Tweets by profetaeterno</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" /> */}
      {/* <div className={styles.mainContainer}>
        <a href="https://twitter.com/profetaeterno?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @profetaeterno</a>
        <script async src="https://platform.twitter.com/widgets.js" />

      </div> */}
    </>
  );
}
