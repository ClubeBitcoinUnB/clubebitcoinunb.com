import Head from 'next/head';
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Clube Bitcoin UnB</title>

                <link rel="icon" href="/img/favicon.ico"/>
                
                <meta name="twitter:site" content="@ClubeBitcoinUnB"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </Head>

            <Component {...pageProps} />
          </>
    );
}
