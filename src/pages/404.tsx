/* eslint-disable @typescript-eslint/no-require-imports */

import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { NextIntlClientProvider, useLocale } from 'next-intl';

export default function Custom404() {
    const locale = useLocale();

    const messages = require(`@/messages/${locale}.json`);
    //console.log(locale);
    
    return (
        <>
        <Head>
            <title>404 | Clube Bitcoin UnB</title>
        </Head>

        <NextIntlClientProvider messages={messages} locale={locale}>
            <Wrapper>
                <Header locale={locale}></Header>

                <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col items-center justify-center text-center sm:space-y-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            404
                        </h1>
                        
                        <Image
                            src="/assets/nakamoto2.jpg"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="object-contain h-64 md:h-96 w-full md:rounded-lg md:shadow-lg"
                        />
                        
                        <Link 
                            href={`/${locale}`}
                            className="mt-6 px-6 py-3 bg-green text-white font-semibold rounded-lg 
                                    hover:bg-opacity-90 transition-all duration-200 shadow-md
                                    hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Back to Index
                        </Link>
                    </div>
                </main>

                <Footer></Footer>
            </Wrapper>
        </NextIntlClientProvider>
        </>
    );
}