import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta sharset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <title>MySeminars</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./assets/css/font-awesome.min.css" />
            <link rel="stylesheet" href="./assets/css/line-awesome.min.css" />
            <link rel="stylesheet" href="./assets/css/flaticon.css" />
            <link rel="stylesheet" href="./assets/font/PFDinText.css" />
            <link rel="stylesheet" href="./assets/css/animate.css" />
            <link rel="stylesheet" href="./assets/css/swiper-bundle.min.css" />
            <link rel="stylesheet" href="./assets/css/modal-video.min.css" />
            <link rel="stylesheet" href="./assets/css/normalize.css" />
            <link rel="stylesheet" href="./assets/css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="./assets/js/jquery-3.6.0.min.js"></script>
          <script src="./assets/js/bootstrap.bundle.js"></script>
          <script src="./assets/js/swiper-bundle.min.js"></script>
          <script src="./assets/js/bootstrap.bundle.js"></script>
          <script src="./assets/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument