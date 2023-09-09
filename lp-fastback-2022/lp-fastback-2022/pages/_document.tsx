import Document, {
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

export default class MyDocument extends Document {
  baseUrl = process.env.BASE_PREFIX;
  isProd = process.env.NODE_ENV === 'production';
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <script
              defer
              src="https://plugin.handtalk.me/web/latest/handtalk.min.js"
          />          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
