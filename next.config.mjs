import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

try {
  jiti('./src/libs/Env'); // Import the environment validation
} catch (error) {
  console.error('Environment validation failed:', error.message);
  // Optionally, throw an error or use default values for missing variables
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: false,
  experimental: {
    serverComponentsExternalPackages: [],
  },
});
