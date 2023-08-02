import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Token from 'web3-token';
import styles from './game1.module.scss';
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Home() {
  const [isLoggedin, setLoggedin] = useState(false);
  const [userNotRegistered, setUserNotRegistered] = useState(false);

  const unityContentLocation = "jogo5/Build";
  const { unityProvider, sendMessage } = useUnityContext({
      loaderUrl: `${unityContentLocation}/web.loader.js`,
      dataUrl: `${unityContentLocation}/web.data`,
      frameworkUrl: `${unityContentLocation}/web.framework.js`,
      codeUrl: `${unityContentLocation}/web.wasm`,
  });

  useEffect(() => {
    const authToken = Cookies.get('fauna-auth');
    if (authToken) {
      setLoggedin(true);
      handleClickSpawnEnemies(authToken)
    }
  }, []);

  function handleClickSpawnEnemies(token) {
    sendMessage("KeyManager", "SpawnEnemies", token);
  }

  const login = async () => {
    // handleClickSpawnEnemies('OIAOISOSI')
    const web3 = new Web3(window.ethereum);

    try {
      const accounts = await window.ethereum.send(
        'eth_requestAccounts',
      );
      const address = accounts.result[0];
      const signed_msg = await Web3Token.sign((msg) => web3.eth.personal.sign(msg, address, undefined), '1h');
      const response = await fetch('api/getUser', {
        method: 'POST',
        body: JSON.stringify({
          signed_msg,
        }),
      });

      if (response.status !== 200 && response.status !== 202) {
        return;
      }

      if (response.status === 202) {
        setUserNotRegistered(true);
      } else {
        const { token } = await response.json();
        const one_hour = new Date(new Date().getTime() + 3600 * 1000); // sign token for 1 hour
        Cookies.set('fauna-auth', token, { expires: one_hour });
        handleClickSpawnEnemies(token)
        setLoggedin(true);
      }
    } catch (error) {
      alert('Metamask Error');
    }
  };

  const logout = () => {
    Cookies.remove('fauna-auth');
    setLoggedin(false);
  };

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
        <Unity style={{width:"280px",height:"500px"}} unityProvider={unityProvider} />
      </div>
      <div className={styles.gameFrame}>
        { !isLoggedin && !userNotRegistered
          && <button type="button" className={styles.buttonRegister} onClick={login}>
              <div>Connect Metamask</div>
              <img src="/images/metamask.svg" alt="metamask icon" />
            </button>}
        { isLoggedin && <button type="button" className={styles.buttonConnected} onClick={logout}>
              <div>Wallet Connected</div>
              <img src="/images/greenLight.svg" alt="green light" />
            </button>}
        {userNotRegistered && (
          <>
            <button type="button" className={styles.buttonConnected} onClick={logout}>
              <div>Wallet not registered</div>
              <img src="/images/redLight.svg" alt="red light" />
            </button>
            <p>
              Just click
              {' '}
              <a href="register">here</a>
              {' '} to register
            </p>
          </>
        )}
      </div>
    </>
  );
}
