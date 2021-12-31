import TypewriterComponent from 'typewriter-effect';
import styles from './styles.module.scss';

export function LetterAnim() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.phrase}>
        <div className={styles.phrasePart1}>
          Será
        </div>
        <div className={styles.phrasePart2}>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString('difícil')
                .pauseFor(1000)
                .deleteAll()
                .typeString('free mint.')
                .pauseFor(1000)
                .deleteAll()
                .typeString('uma jornada.')
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
