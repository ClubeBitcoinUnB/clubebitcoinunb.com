/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

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

export default function Resources({ locale }: { locale: string }) {
    const translate = useTranslations("Resources");

    return (
        <>
        <Wrapper>
            <Header locale={locale}></Header>

            <main className="font-grotesk w-full flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold mb-6 self-start">
                        {translate("title")}
                    </h1>
                    
                    <div className="">
                        {translate("description")}
                    </div>
                </div>
            </main>

            <Footer></Footer>
        </Wrapper>
        </>
    );
}
