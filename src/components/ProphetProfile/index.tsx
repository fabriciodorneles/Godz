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
          <div className={styles.twitterContainer}>
            <a
              href="https://twitter.com/theprophetsgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/twitter_icon.svg" alt="twitter icon" />
              Follow @theprophetsgame
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
