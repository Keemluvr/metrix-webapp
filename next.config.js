const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  trailingSlash: false,
  compress: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    INITIAL_PATH_URL: process.env.NEXT_PUBLIC_INITIAL_PATH_URL,
    INITIAL_PATH_URL_API: process.env.NEXT_PUBLIC_INITIAL_PATH_URL_API,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL
  }
});

module.exports = nextConfig;
