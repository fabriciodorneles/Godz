import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="stylesheet" href="https://use.typekit.net/psg8jvy.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <script async src="https://platform.twitter.com/widgets.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
