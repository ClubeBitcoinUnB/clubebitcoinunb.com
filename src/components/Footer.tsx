//import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
    //const translate = useTranslations("Footer");

    return(
        <footer className="bottom-0 w-full shadow-xl my-1 font-serif">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex flex-col items-center justify-center">

                <h3 className="font-grotesk text-lg pt-4 text-center font-bold">
                    Supported by:
                </h3>

                <div className="flex flex-row space-x-24">
                    <a
                        href="https://vinteum.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/assets/vinteum.png"
                            alt="Vinteum"
                            width={21}
                            height={21}
                            className="h-8 w-auto sm:h-8 md:h-10 lg:h-12"
                        />
                    </a>

                    <a
                        href="https://www.bitcoinstudentsnetwork.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/assets/bsn.svg"
                            alt="Bitcoin Students Network"
                            width={21}
                            height={21}
                            className="h-8 w-auto sm:h-8 md:h-10 lg:h-12"
                        />
                    </a>
                </div>

                <h3 className="text-sm pt-4 text-center font-bold">
                    <a href="https://mempool.space/tx/<txid>" className="hover:text-orange"></a>
                </h3>
            </div>
        </footer>
    )
}
