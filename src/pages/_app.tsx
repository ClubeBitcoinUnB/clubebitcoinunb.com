import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>Clube Bitcoin UnB</title>
        </Head>

        <NextIntlClientProvider 
            messages={pageProps.messages || {}} 
            locale={pageProps.locale || "pt"}
            timeZone="UTC-3"
        >
            <Component {...pageProps} />
        </NextIntlClientProvider>
    </>
  );
}