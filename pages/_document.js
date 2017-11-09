import Document, { Head, Main, NextScript } from 'next/document';
import { injectGlobal, ServerStyleSheet } from 'styled-components';
import normalize from 'normalize.css/normalize.css';
import blueprintjs from '@blueprintjs/core/dist/blueprint.css';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>DRYSEL DEMO APP</title>
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: normalize }} />
          <style dangerouslySetInnerHTML={{ __html: blueprintjs }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
