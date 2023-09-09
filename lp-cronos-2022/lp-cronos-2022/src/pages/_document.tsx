import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Sinta o poder da sofisticação com o Fiat Cronos. Confira todas as versões e se surpreenda com seu design esportivo espetacular. Saiba mais." />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <meta name="theme-color" content="#0E0E0E" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cronos.fiat.com.br/" />
        <meta property="og:title" content="Fiat Cronos" />
        <meta property="og:description" content="Sinta o poder da sofisticação com o Fiat Cronos. Confira todas as versões e se surpreenda com seu design esportivo espetacular. Saiba mais." />
        <meta property="og:image" content="https://cronos.fiat.com.br/assets/images/img-share.jpg" />
          
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cronos.fiat.com.br/" />
        <meta property="twitter:title" content="Fiat Cronos" />
        <meta property="twitter:description" content="Sinta o poder da sofisticação com o Fiat Cronos. Confira todas as versões e se surpreenda com seu design esportivo espetacular. Saiba mais." />
        <meta property="twitter:image" content="https://cronos.fiat.com.br/assets/images/img-share.jpg" />
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
