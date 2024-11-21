import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return(
        <Html className="min-h-screen">
            <Head>
                <link rel="icon" href="/assets/favicon.ico"/>
                <meta name="twitter:site" content="@ClubeBitcoinUnB"/>
            </Head>

            <body className="min-h-full flex flex-col antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
