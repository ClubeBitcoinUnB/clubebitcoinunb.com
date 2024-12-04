/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const locales = ["en", "pt"];

export const getStaticPaths = async () => {
    return {
        paths: locales.map((locale) => ({ params: { locale } })),
        fallback: false,
    };
};
  
export const getStaticProps = async ({ params }: { params: { locale: string } }) => {
    try {
        const messages = (await import(`@/messages/${params.locale}.json`)).default;
        return {
            props: {
                messages,
                locale: params.locale
            }
        };
    } catch (error) {
        return {
            redirect: {
                destination: "/404",
                permanent: false,
            },
        };
    }
};

export default function Home({ locale }: { locale: string }) {
    //console.log(locale);

    const translate = useTranslations("Home");

    return (
        <Wrapper>
            <Header locale={locale}></Header>

            <main className="w-full flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-base">
                <p>&quot;Cypherpunks write code. We know that someone has to write software to defend privacy, 
                    and since we cant get privacy unless we all do, were going to write it. We publish our 
                    code so that our fellow Cypherpunks may practice and play with it. Our code is free for all 
                    to use, worldwide.&quot;
                </p>
                <h1><b>&mdash;Eric Hughes</b></h1>

                <br/>

                <p>&quot;I dont believe we shall ever have a good money again before we take the thing out of the
                     hands of government, that is, we cant take it violently out of the hands of government, all
                      we can do is by some sly roundabout way introduce something that they cant stop.&quot;
                </p>
                <h1><b>&mdash;Friedrich Hayek</b></h1>

                <br/>

                <p>&quot;If you dont believe me or dont get it, I dont have time to try to convince you, sorry.&quot;</p>
                <h1><b>&mdash;Satoshi Nakamoto</b></h1>
                

            </main>

            <Footer></Footer>
        </Wrapper>
    );
}
