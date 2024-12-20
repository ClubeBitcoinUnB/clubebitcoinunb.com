import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default withNextIntl(nextConfig);