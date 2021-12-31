import Head from 'next/head';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Godz</title>
      </Head>
      <Header />
      <Hero />
    </>
  );
}
