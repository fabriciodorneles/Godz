import { useState } from 'react';
import styles from './styles.module.scss';

export function Hero() {
  const [bgState, setBgState] = useState('');

  return (
    <div className={styles.externalContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.parent}>
          <div className={styles.heroImageContainer}>

            {bgState === 'cernnunos' && (<img src="/images/bg_cernnunos.png" alt="Cernnunos" />)}
            {bgState === 'odin' && (<img src="/images/bg_odin.png" alt="Odin" />)}
            {bgState === 'annubis' && (<img src="/images/bg_anubis.png" alt="Annubis" />)}

          </div>
          <div>
            <div className={styles.heroInsideContainer}>
              <div className={styles.heroTitleContainer}>
                <p className={styles.textSmall}> BECOME A </p>
                <div className={styles.buttonsText}>
                  <div
                    className={styles.buttonG}
                    onFocus={() => setBgState('cernnunos')}
                    onMouseOver={() => setBgState('cernnunos')}
                    onMouseLeave={() => setBgState('')}
                  >
                    {bgState !== 'cernnunos'
                      ? (<img src="/images/G_big.svg" alt="g_hover" />) : (
                        <div className={styles.linkWhat}>
                          <a href="./what">
                            <img
                              src="/images/question_button.svg"
                              alt="Question Button"
                              className={styles.hiddenButton}
                            />
                          </a>
                        </div>
                      ) }
                  </div>
                  <div className={styles.divider1} />
                  <div
                    className={styles.buttonO}
                    onFocus={() => setBgState('odin')}
                    onMouseOver={() => setBgState('odin')}
                    onMouseLeave={() => setBgState('')}
                  >
                    {bgState !== 'odin'
                      ? (
                        <img
                          src="/images/O_big.svg"
                          alt="o_hover"
                        />
                      ) : (
                        <div className={styles.linkHow}>
                          <a href="./how">
                            <img
                              src="/images/arrow_button.svg"
                              alt="Arrow Button"
                              className={styles.hiddenButton}
                            />
                          </a>
                        </div>
                      ) }
                  </div>
                  <div className={styles.divider2} />
                  <div
                    className={styles.buttonD}
                    onFocus={() => setBgState('annubis')}
                    onMouseOver={() => setBgState('annubis')}
                    onMouseLeave={() => setBgState('')}
                  >
                    {bgState !== 'annubis'
                      ? (
                        <img
                          src="/images/D_big.svg"
                          alt="d_hover"
                        />
                      ) : (
                        <div className={styles.linkWho}>
                          <a href="./who">
                            <img
                              src="/images/at_button.svg"
                              alt="At Button"
                              className={styles.hiddenButton}
                            />
                          </a>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <a
                href="./Gods_Whitepaper_v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whitepaper}
              >
                Gods Parchment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
