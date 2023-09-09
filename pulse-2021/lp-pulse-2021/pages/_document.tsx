import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { metaTags } from '@/constants';

export default class MyDocument extends Document {
  baseUrl = process.env.BASE_PREFIX;
  isProd = process.env.NODE_ENV === 'production';
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="canonical"
            href="https://pulse.fiat.com.br/"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${this.baseUrl}apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${this.baseUrl}favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${this.baseUrl}favicon-16x16.png`}
          />
          <link
            rel="manifest"
            href={`${this.baseUrl}site.webmanifest`}
          />
          <link
            rel="mask-icon"
            href={`${this.baseUrl}safari-pinned-tab.svg`}
            color="#ff1430"
          />
          <meta
            name="msapplication-TileColor"
            content="#ff1430"
          />
          <meta name="theme-color" content="#222652" />
          <script
            defer
            src="https://player.vimeo.com/api/player.js"
          />

          <script
            defer
            src="https://plugin.handtalk.me/web/latest/handtalk.min.js"
          />

          <script
            defer
            type="text/javascript"
            src={`${process.env.BASE_PREFIX}script.js`}
          />
          <meta
            name="description"
            content={metaTags.description}
          />
          <meta name="title" content={metaTags.title} />
          <meta property="og:url" content={metaTags.url} />
          <meta property="og:title" content={metaTags.title} />
          <meta
            property="og:description"
            content={metaTags.description}
          />
          <meta property="image" content={metaTags.image} />
          <meta property="og:image" content={metaTags.image} />
          <meta
            property="og:image:alt"
            content={metaTags.imageAlt}
          />
          <meta
            name="twitter:card"
            content={metaTags.twitter.card}
          />
          <meta
            name="tiwtter:site"
            content={metaTags.twitter.site}
          />
          <meta
            name="tiwtter:image"
            content={metaTags.twitter.image}
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
