import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://kit.fontawesome.com/b11c9ac945.js"
            crossorigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
