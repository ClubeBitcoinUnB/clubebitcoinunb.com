import { useRouter } from "next/router";

const languages = {
    en: "EN🇺🇸",
    pt: "PT🇧🇷",
};

export function LanguageSwitcher() {
    const router = useRouter();
    const currentLocale = router.query.locale as string;

    const handleLanguageChange = (newLocale: string) => {
        localStorage.setItem("preferredLocale", newLocale);
        window.location.href = `/${newLocale}`;
    };

    return (
        <select 
            value={currentLocale}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-green rounded-lg cursor-pointer"
        >
            {Object.entries(languages).map(([code, name]) => (
                <option key={code} value={code}>
                    {name}
                </option>
            ))}
        </select>
    );
}