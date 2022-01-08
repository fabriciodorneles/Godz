import Head from 'next/head';
import { Header } from '../components/Header';
import { LetterAnim } from '../components/LetterAnim';

export default function Home() {
  return (
    <>
      <Head>
        <title>Godz</title>
      </Head>
      <Header />
      <div>
        <LetterAnim />
      </div>
    </>
  );
}
