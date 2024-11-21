export default function middleware(
  // event: NextFetchEvent,
) {

}

export const config = {
  matcher: [
    // Enable a redirect to a matchconst messages = useMessages();ing locale at the root
    '/',
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',

    // ?
    '/(api|trpc)(.*)',
  ],
};
