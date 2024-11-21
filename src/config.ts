import { Env } from '@/libs/Env';

export const PORT = process.env.PORT || 3000;

export const getHost = () => {
  if (Env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${Env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return `http://localhost:${PORT}`;
};

export const HOST = getHost();

export const getDomain = () => {
  if (Env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
    return Env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  }

  if (process.env.VERCEL_URL) {
    return process.env.VERCEL_URL;
  }

  return `localhost:${PORT}`;
};

export const DOMAIN = getDomain();

// SEO tips
/**
 * Generates an object that maps locale codes to their corresponding URLs.
 * This is useful for setting up alternate language URLs in Next.js metadata configuration.
 *
 * @param href - The base URL of the page.
 * @param slug - An optional object containing slugs for each locale.
 * @returns An object where the keys are locale codes (including 'x-default' for the default locale) and the values are the full URLs.
 *
 * This function is commonly used for setting up the `alternates` metadata property in a Next.js page:
 *
 * export const metadata = {
 *   alternates: getAlternatesLanguages('/about', { en: 'about', fr: 'a-propos' }),
 * };
 */
// export const getAlternatesLanguages = (href: string, slug?: any) => {
//   return AppConfig.locales.reduce<{ [key: string]: string }>(
//     (acc, loc) => ({
//       ...acc,
//       [loc]: `${getCanonicalUrl(href, loc)}${slug ? `/${slug[loc]}` : ''}`,
//     }),
//     {
//       'x-default': `${getCanonicalUrl(href, AppConfig.defaultLocale)}${slug ? `/${slug[AppConfig.defaultLocale]}` : ''}`,
//     },
//   );
// };

export const getTwitterMeta = ({
  title,
  description,
  locale,
}: {
  title: string;
  description: string;
  locale: any;
}) => {
  return {
    card: 'summary_large_image',
    title,
    description,
    images: [`/og/${locale}.jpg`], // metadataBase property in metadata export is not set for resolving social open graph or twitter images, using "http://localhost:3000". See https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase
  };
};
