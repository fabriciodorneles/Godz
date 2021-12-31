import styles from './styles.module.scss';

export function Hero() {
  return (
    <div className={styles.parent}>
      <div className={styles.heroImageContainer}>
        <img src="/images/Cernnunos_1x.png" alt="Deus Grego" />
        {/* <img src="/ima es/Anubis.png" alt="Deus Grego" /> */}
        {/* <img src="/images/grego.png" alt="Deus Grego" /> */}

      </div>
      <div>
        <div className={styles.heroInsideContainer}>
          <div className={styles.heroTitleContainer}>
            <p className={styles.textSmall}> BECOME A </p>
            <p className={styles.textLarge}> GOD </p>
          </div>
          <div className={styles.iconContainer}>
            <img src="/images/down_arrow.png" width="40px" alt="down arrow" />
          </div>
        </div>
      </div>

    </div>
  );
}
