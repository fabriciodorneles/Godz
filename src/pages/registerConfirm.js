import Web3Token from 'web3-token';
import Head from 'next/head'
import { useState } from 'react'
import Cookies from 'js-cookie'
import Web3 from 'web3';
import styles from './register.module.scss'

export default function Register() {
  const [isRegisterOK, setIsRegisterOK] = useState(false);
  const [ipAlreadyRegistered, setIpAlreadyRegistered] = useState(false);

  const registerUser = async event => {
    event.preventDefault()

    const web3 = new Web3(window.ethereum);
    try {
      const accounts = await window.ethereum.send(
        "eth_requestAccounts"
      )
      const address = accounts.result[0];
      const signed_msg = await Web3Token.sign(msg => web3.eth.personal.sign(msg, address), '1h');
      const response = await fetch('/api/registerConfirm', {
        method: 'POST',
        body: JSON.stringify({
          signed_msg,
          name: event.target.name.value,
          email: event.target.email.value,
          discord: event.target.discord.value,
        }),
      })

      if(response.status !== 200 && response.status !== 202) {
        return;
      }

      if (response.status === 202) {
        setIpAlreadyRegistered(true);
      } else {
        setIsRegisterOK(true);
      }

    } catch (error) {
      alert('Please Install MetaMask Wallet')
      return;
    }
  }


  return (
    <>
    <Head>
      <title>Game 1</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.2/dist/css/uikit.min.css" />
    </Head>
    <div className={styles.container}>
      <main className={styles.main}>
        <form className={styles.formContainer} onSubmit={registerUser}>
          <div className={styles.labelContainer}>Name</div>
          <input className={styles.inputContainer} id="name" name="name" type="text" autoComplete="name" placeholder='Your Name' required />
          <div className={styles.labelContainer}>Email</div>
          <input className={styles.inputContainer} id="email" name="email" type="text" autoComplete="email" placeholder='youremail@email.com' required />
          <div className={styles.labelContainer}>Discord</div>
          <input className={styles.inputContainer} id="discord" name="discord" type="text" autoComplete="discord" placeholder='name#0000' required />
          <button type="submit" className={styles.buttonSubmit}>Register</button>
        </form>
        {isRegisterOK && (
          <>
            <div>Registration Successful</div>
            <a href='./wings_unity' className={styles.buttonRegistered}><div>&lt;</div>{' '}Back to Game</a>
          </>
          )}
        {ipAlreadyRegistered && (
          <>
            <div>IP já registrado. Apenas uma carteira por IP.</div>
            <a href='./wings_unity' className={styles.buttonRegistered}><div>&lt;</div>{' '}Back to Game</a>
          </>
          )}
      </main>
    </div>
    </>
  )
}
