import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useState } from "react";

type HeaderProps = {
    locale: string;
}

export default function Header({ locale }: HeaderProps) {
    const translate = useTranslations("Header");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="sticky top-0 shadow-xl bg-green text-white font-berkeley z-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-32">
                    <div className="flex items-center space-x-3">
                        <Link href={`/`}>
                            <Image
                                src="/assets/logo.png"
                                alt="Clube Bitcoin UnB"
                                width={40}
                                height={40}
                                className="h-24 w-auto border-3 border-white"
                            />
                        </Link>

                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                {translate("title1")}
                                <br/>
                                {translate("title2")}
                                <br/>
                                {translate("title3")}
                            </h1>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-8">
                        <nav className="hidden md:flex space-x-8 font-bold">
                            <Link href="/" className="hover:text-orange">{translate("home")}</Link>

                            <Link href={`/${locale}/resources`} className="hover:text-orange">{translate("resources")}</Link>

                            <a href="https://github.com/ClubeBitcoinUnB/workshops/" className="hover:text-orange">{translate("workshops")}</a>
                        </nav>
                        <LanguageSwitcher />
                    </div>               
                    
                    <button 
                        className="md:hidden z-20"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-green z-10 pt-36">
                        <nav className="flex flex-col items-center space-y-8 pt-8 font-bold">
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Clube Bitcoin UnB"
                                    width={40}
                                    height={40}
                                    className="h-12 w-auto border-3 border-white"
                                />
                                <p className="text-xs mt-2 text-center">
                                    <a href="https://mempool.space/tx/108d6d010645db55e983a225651c43c21145bace3651201cff88e439304cfce9">
                                        Established<br/>874,185
                                    </a>
                                </p>
                            </div>

                            <a 
                                href={`/${locale}`}
                                className="hover:text-orange"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {translate("home")}
                            </a>

                            <Link 
                                href={`/${locale}/resources`}
                                className="hover:text-orange"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {translate("resources")}
                            </Link>

                            <a 
                                href="#" 
                                className="hover:text-orange"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {translate("workshops")}
                            </a>

                            <div>
                                <LanguageSwitcher />
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
