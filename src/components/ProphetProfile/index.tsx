import styles from './styles.module.scss';

export function ProphetProfile() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.profile}>
        <div className={styles.info}>
          <div className={styles.title}>
            <div>
              <a href="./game1">
                <img src="./images/profeta_avatar.png" alt="" />
              </a>
            </div>
            <div>
              <div className={styles.name}>
                PROFETA
                <img src="./images/verified_icon.svg" alt="" />
              </div>
              <div className={styles.godsGame}>
                Gods Game
              </div>
            </div>
          </div>
          <div className={styles.twitterContainer}>
            <a
              href="https://twitter.com/profetaeterno?ref_src=twsrc%5Etfw"
            >
              <img src="./images/twitter_icon.svg" alt="" />
              Follow @profetaeterno
            </a>
          </div>
        </div>
        <div className={styles.text}>
          O Profeta será seu guia.
        </div>

      </div>
    </div>
  );
}
