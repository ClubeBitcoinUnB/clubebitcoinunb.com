import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                green: "var(--green)",
                lightblue: "var(--light-blue),",
                orange: "var(--orange)",
                tan: "var(--tan)",

            },
            borderWidth: {
                '3': '3px',
            },
            fontFamily: {
                grotesk: ["Grotesk-Sharp"],
                berkeley: ["Berkeley"],
                ibmplexbold: ["IBMPlexSansBold"],
                ibmplexmono: ["IBMPlexMono"]
            },
        },
    },
    plugins: [],
} satisfies Config;
