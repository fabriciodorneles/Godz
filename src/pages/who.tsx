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
        <div>
          <div className={styles.containerWho}>
            <div>
              <img src="/images/condz_marcacao.png" alt="Condz" />
            </div>
            <div className={styles.infoWho}>
              <div className={styles.headerWho}>
                <div className={styles.idWho}>
                  <div className={styles.titleWho}>
                    <h1>CONDZ</h1>
                  </div>
                  <div className={styles.instaWho}>
                    <a href="https://twitter.com/woconds" target="_blank" rel="noreferrer">@wocondz</a>
                  </div>
                </div>
                <div className={styles.twitterWho}>
                  <img src="/images/twitter_icon.svg" alt="Condz" />
                </div>
              </div>
              <div className={styles.textWho}>
                <p>
                  +10 anos xp em game dev & tech
                </p>
              </div>
              <div className={styles.neoTokyoWho}>
                <p>NeoTokyo Citizen #1369</p>
              </div>
            </div>
          </div>
          <div className={styles.divider}>
            <img src="/images/dividerWho.svg" alt="Condz" />
          </div>
          <div className={styles.containerWho}>
            <div>
              <img src="/images/gus_marcacao.png" alt="Condz" />
            </div>
            <div className={styles.infoWho}>
              <div className={styles.headerWho}>
                <div className={styles.idWho}>
                  <div className={styles.titleWho}>
                    <h1>GUSDISA</h1>
                  </div>
                  <div className={styles.instaWho}>
                    <a href="https://twitter.com/gustavodesafre1" target="_blank" rel="noreferrer">@gustavodesafre1</a>
                  </div>
                </div>
                <div className={styles.twitterWho}>
                  <img src="/images/twitter_icon.svg" alt="Condz" />
                </div>
              </div>
              <div className={styles.textWho}>
                <p>
                  Engenheiro e MBA em bizdev
                </p>
              </div>
              <div className={styles.neoTokyoWho}>
                <p>NeoTokyo Citizen #25</p>
              </div>
            </div>
          </div>
          <div className={styles.divider}>
            <img src="/images/dividerWho.svg" alt="Condz" />
          </div>
          <div className={styles.commentContainer}>
            <div className={styles.millionsContainer}>
              <p>Milhões em NFTs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
