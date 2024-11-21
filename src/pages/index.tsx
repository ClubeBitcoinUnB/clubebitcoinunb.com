/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultLocale, locales } from '@/config/i18n';

export default function Index() {
    if (typeof window !== 'undefined') {
        const saved = window.localStorage.getItem('preferredLocale');
        
        if (saved && locales.includes(saved as any)) {
            window.location.href = `/${saved}`;
        } else {
            window.location.href = `/${defaultLocale}`;
        }
    }

    return null;
}
