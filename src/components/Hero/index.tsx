import { useState } from 'react';
import styles from './styles.module.scss';

export function Hero() {
  const [bgState, setBgState] = useState('');

  return (
    <div className={styles.externalContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.parent}>
          <div className={styles.heroImageContainer}>

            {bgState === 'cernnunos' && (<img src="/images/bg_cernnunos.png" alt="Cernunos" />)}
            {bgState === 'grego' && (<img src="/images/bg_grego.png" alt="Deus Grego" />)}
            {bgState === 'annubis' && (<img src="/images/bg_anubis.png" alt="Deus Grego" />)}

          </div>
          {/* <div className={styles.heroImageContainer}>

        <img src="/images/bg_cernnunos.png" alt="Cernunos" />
        <img src="/images/bg_grego.png" alt="Deus Grego" />
        <img src="/images/bg_anubis.png" alt="Deus Grego" />

      </div> */}
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
                      ? (<img src="/images/G_big.svg" alt="Cernnunos" />) : (
                        <a
                          style={{ paddingTop: '140px', paddingRight: '70px' }}
                          href="./what"
                        >
                          <img
                            style={{ width: '40px', height: '40px' }}
                            src="/images/question_button.svg"
                            alt="Question Button"
                            className={styles.hiddenButton}
                          />
                        </a>
                      ) }
                  </div>
                  <div style={{ width: '90px' }} />
                  <div
                    className={styles.buttonO}
                    onFocus={() => setBgState('grego')}
                    onMouseOver={() => setBgState('grego')}
                    onMouseLeave={() => setBgState('')}
                  >
                    {bgState !== 'grego'
                      ? (
                        <img
                          src="/images/O_big.svg"
                          alt="Deus Grego"
                        />
                      ) : (
                        <a
                          style={{ paddingTop: '110px', paddingLeft: '80px' }}
                          href="./how"
                        >
                          <img
                            style={{ width: '40px', height: '40px' }}
                            src="/images/arrow_button.svg"
                            alt="Arrow Button"
                            className={styles.hiddenButton}
                          />
                        </a>
                      ) }
                  </div>
                  <div style={{ width: '80px' }} />
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
                        <a
                          style={{ paddingTop: '55px', paddingRight: '50px' }}
                          href="./who"
                        >
                          <img
                            style={{ width: '40px', height: '40px' }}
                            src="/images/at_button.svg"
                            alt="At Button"
                            className={styles.hiddenButton}
                          />
                        </a>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
