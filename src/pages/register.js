// pages/index.js

import Head from 'next/head'
import { useState } from 'react'
import Cookies from 'js-cookie'
import Web3 from 'web3';
import Web3Token from 'web3-token';
import styles from './Register.module.scss'

export default function Register() {
  const [isLoggedin, setLoggedin] = useState(false);

  const registerUser = async event => {
    event.preventDefault()

    const web3 = new Web3(window.ethereum);
    try {
      const accounts = await window.ethereum.send(
        "eth_requestAccounts"
      )
      console.log('accounts', accounts.result[0]);
      const address = accounts.result[0];
      const signed_msg = await Web3Token.sign(msg => web3.eth.personal.sign(msg, address), '1h');

      const response = await fetch('/api/register', {
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
      console.log('==> ', response.status);
        const { token } = await response.json();
        const one_hour = new Date(new Date().getTime() +  3600 * 1000) // sign token for 1 hour
        Cookies.set('fauna-auth', token, { expires: one_hour })
        setLoggedin(true)

    } catch (error) {
      alert('Please Install MetaMask Wallet')
      return;
    }
  }


  return (
    <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.2/dist/css/uikit.min.css" />
    </Head>
    <div className={styles.container}>
      <main className={styles.main}>
        <form className={styles.formContainer} onSubmit={registerUser}>
          <label htmlFor="name">Name</label>
          <input className={styles.inputContainer} id="name" name="name" type="text" autoComplete="name" required />
          <label htmlFor="email">Email</label>
          <input className={styles.inputContainer} id="email" name="email" type="text" autoComplete="email" required />
          <label htmlFor="name">Discord</label>
          <input className={styles.inputContainer} id="discord" name="discord" type="text" autoComplete="discord" required />
          <button type="submit" className="uk-button uk-button-primary uk-button-large">Register</button>
        </form>
        {isLoggedin && <p>Carteira Cadastrada. Pode Voltar ao <a href='game1'>Jogo</a>.</p>}
      </main>
    </div>
    </>
  )
}
