/* eslint-disable @typescript-eslint/no-unused-vars */

import { GetStaticProps, GetStaticPaths } from "next";
import Link from "next/link";
import Image from 'next/image'
import { useTranslations } from "next-intl";
import Wrapper from "@/components/Wrapper";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NostrEmbed from "@/components/NostrEmbed";
import XEmbed from "@/components/XEmbed";

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
            <Header locale={locale}/>

            <Content>
                <div className="text-3xl font-grotesk font-bold">
                    {translate("who")}
                </div>
                <div className="text-xl mb-8">
                    {translate("who-description")}
                </div>

                <div className="text-3xl font-grotesk font-bold">
                    {translate("what")}
                </div>
                <div className="text-xl mb-8">
                    {translate("what-description")}
                </div>

                <div className="text-3xl font-grotesk font-bold">
                    {translate("how")}
                </div>
                <div className="text-xl mb-8">
                    {translate("how-description")}
                </div>

                <div className="text-3xl font-grotesk font-bold">
                    {translate("when")}
                </div>
                <div className="text-xl mb-8">
                    {translate("when-description")}
                </div>

                {/* Link Section */}
                <div className="text-3xl font-grotesk font-bold mb-4">
                    {translate("our-links")}
                </div>

                <div className="text-2xl font-grotesk font-bold">
                    <Link href="https://github.com/ClubeBitcoinUnB" className="hover:text-orange">
                        <Image 
                            src={`/assets/github.svg`} 
                            alt="GitHub" 
                            width={0} 
                            height={0}
                            style={{ 
                                width: 'auto', 
                                height: '1em', 
                                display: 'inline-block',
                                verticalAlign: 'baseline'
                            }}
                        />
                        &nbsp;
                        GitHub
                    </Link>
                </div>
                <div className="text-xl mb-4">
                    {translate.rich("github-description")}
                </div>

                <div className="text-2xl font-grotesk font-bold">
                    <Link href="https://njump.me/npub105tr46lgr3zlz68sjyk4026y0ynd7uckzys0gk7jhpep54w4s50qzdv8xy" className="hover:text-orange">
                        <Image 
                            src={`/assets/nostr.png`} 
                            alt="Nostr" 
                            width={0} 
                            height={0}
                            style={{ 
                                width: 'auto', 
                                height: '1em', 
                                display: 'inline-block',
                                verticalAlign: 'baseline'
                            }}
                        />
                        &nbsp;
                        Nostr
                    </Link>
                </div>
                <div className="text-xl mb-6 break-words">
                    {translate("nostr-description")}
                            
                    <br/>
                    <br/>
                    
                    <NostrEmbed/>
                </div>

                <div className="text-2xl font-grotesk font-bold">
                    <Link href="https://x.com/ClubeBitcoinUnB" className="hover:text-orange">
                        𝕏 .com
                    </Link>
                </div>
                <div className="text-xl mt-2 mb-6">
                    <XEmbed username="ClubeBitcoinUnB"/>
                </div>

                <div className="text-2xl font-grotesk font-bold">
                    <Link href="https://www.linkedin.com/company/clube-bitcoin-unb" className="hover:text-orange">
                        <Image 
                            src={`/assets/linkedin.png`} 
                            alt="LinkedIn" 
                            width={0} 
                            height={0}
                            style={{ 
                                width: 'auto', 
                                height: '1em', 
                                display: 'inline-block',
                                verticalAlign: 'baseline'
                            }}
                        />
                        &nbsp;
                        LinkedIn
                    </Link>
                </div>
                <div className="text-xl mb-4">
                    
                </div>
                 


            </Content>

            <Footer/>
        </Wrapper>
    );
}
