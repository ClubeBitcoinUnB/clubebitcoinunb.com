import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type HeaderProps = {
    locale: string;
}

export default function Header({ locale }: HeaderProps) {
    const translate = useTranslations("Header");

    return(
        <header className="sticky top-0 shadow-xl bg-green text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-36">
                    <div className="flex items-center space-x-3">
                        <Link href={`/${locale}`}>
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="h-24 w-auto border-3 border-white"
                            />
                        </Link>

                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                {translate("Title1")}
                                <br/>
                                {translate("Title2")}
                                <br/>
                                {translate("Title3")}
                            </h1>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                        <nav className="hidden md:flex space-x-8 font-bold">
                            {/*<a href="#" className="hover:text-black">{translate("About")}</a>*/}
                            <a href="#" className="hover:text-orange">{translate("Members")}</a>
                            <a href="#" className="hover:text-orange">{translate("Workshops")}</a>
                            <Link href={`/${locale}/infra`} className="hover:text-orange">{translate("Infrastructure")}</Link>
                        </nav>
                        <LanguageSwitcher />
                    </div>               
                    
                    {/*
                    <button className="md:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    */}
                </div>
            </div>
        </header>
    );
}