import styles from './styles.module.scss';

export function ProphetProfile() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profile}>
        <div className={styles.info}>
          <div className={styles.title}>
            <div>
              <img src="./images/profeta_avatar.png" alt="prophet avatar" />
            </div>
            <div>
              <div className={styles.name}>
                PROPHET
                <img src="./images/verified_icon.svg" alt="verified icon" />
              </div>
              <div className={styles.godsGame}>
                Gods Game
              </div>
            </div>
          </div>
          <div className={styles.socialMediaContainer}>
            <a
              href="https://twitter.com/GodsgameNFT"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.twitter}
            >
              <img src="./images/twitter_icon.svg" alt="twitter icon" />
              Follow @GodsgameNFT
            </a>
            <a
              href="https://discord.com/invite/godsgame"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.discord}
            >
              <img src="./images/discord.svg" alt="twitter icon" />
              Join Godsgame Discord
            </a>
            <a
              href="./Gods_Whitepaper_v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whitepaper}
            >
              White Paper
            </a>
          </div>
        </div>
        <div className={styles.text}>
          Your guide.
        </div>

      </div>
    </div>
  );
}
