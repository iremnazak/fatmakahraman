/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "standalone",
}

export default withNextIntl(nextConfig);
