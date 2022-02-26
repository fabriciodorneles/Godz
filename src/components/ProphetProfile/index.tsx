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
                <a href="./r3h5yc9tf7t9pv2">
                  <img src="./images/verified_icon.svg" alt="verified icon" />
                </a>
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
          </div>
        </div>
        <div className={styles.text}>
          Your guide.
        </div>

      </div>
    </div>
  );
}
