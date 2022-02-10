import { get } from 'http';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Token from 'web3-token';
import styles from './game1.module.scss';

export default function highScore() {
  const [highScoreList, setHighScoreList] = useState(null)

  useEffect(() => {
    getHighScore();
  }, []);

  const getHighScore = async () => {
    try {
      const response = await fetch('api/getHighScore')
      const res = await response.json();
      if (response.status !== 200 && response.status !== 202) {
        return;
      }
      console.log(res.highScoreList.data);
      setHighScoreList(res.highScoreList.data);

      // if (response.status === 202) {
      //   setUserNotRegistered(true);
      // } else {
      //   const { token } = await response.json();
      //   const one_hour = new Date(new Date().getTime() + 3600 * 1000); // sign token for 1 hour
      //   Cookies.set('fauna-auth', token, { expires: one_hour });
      //   setLoggedin(true);
      // }
    } catch (error) {
      alert('Please Install MetaMask Wallet');
    }
  };
  console.log('-->',highScoreList);
  return (
    <>
      <Head>
        <title>Godz</title>
      </Head>
      <header className={styles.headerContainer}>
        <nav>
          <a href="./how">
            {/* <img src="/images/question_icon.svg" alt="ig.news" /> */}
          </a>
        </nav>
      </header>
      <div className={styles.gameFrame}>
        <button type="button" className={styles.buttonRegister} onClick={getHighScore}>
          <div>High Score</div>
        </button>
        <ul>
          {highScoreList && highScoreList.map((user) => (
            <li key={user[1]}>{user[0]}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
