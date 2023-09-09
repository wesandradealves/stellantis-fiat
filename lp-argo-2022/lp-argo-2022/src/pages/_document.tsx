import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Bem-vindo ao Fabuloso Design do Fiat Argo"
        />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta name="theme-color" content="#3B369E" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://argo.fiat.com.br/" />
        <meta property="og:title" content="Fiat Argo" />
        <meta
          property="og:description"
          content="Chega o momento que a vida pede um Argo. Conheça o fabuloso Design do Fiat Argo! Confira todas as versões e se surpreenda. Saiba mais."
        />
        <meta
          property="og:image"
          content="https://argo.fiat.com.br/assets/images/img-share.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://argo.fiat.com.br/" />
        <meta property="twitter:title" content="Fiat Argo" />
        <meta
          property="twitter:description"
          content="Chega o momento que a vida pede um Argo. Conheça o fabuloso Design do Fiat Argo! Confira todas as versões e se surpreenda. Saiba mais."
        />
        <meta
          property="twitter:image"
          content="https://argo.fiat.com.br/assets/images/img-share.jpg"
        />
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
