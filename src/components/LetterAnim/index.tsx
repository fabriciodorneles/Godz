import TypewriterComponent from 'typewriter-effect';
import styles from './styles.module.scss';

export function LetterAnim() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.phrase}>
        <div className={styles.phrasePart1}>
          It will be
        </div>
        <div className={styles.phrasePart2}>
          <TypewriterComponent
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString('a game.')
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(500)
                .typeString('for the deserving.')
                .pauseFor(1000)
                .deleteAll()
                .pauseFor(500)
                .typeString('a journey.')
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(1000)
                .typeString('. . .')
                .pauseFor(3000)
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
}
