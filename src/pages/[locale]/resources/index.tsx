/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Content from "@/components/Content";

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
            <Header locale={locale}/>

            <Content>
                <b className="text-4xl font-ibmplexbold">SOON&trade;</b>
            </Content>

            <Footer/>
        </Wrapper>
        </>
    );
}
