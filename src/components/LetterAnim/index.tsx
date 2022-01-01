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
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString('difícil')
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(500)
                .typeString('free mint.')
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(500)
                .typeString('uma jornada.')
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(1000)
                .typeString('. . .')
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
