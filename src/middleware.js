import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix } from "@/config";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "bn"],

//   // Used when no locale matches
//   defaultLocale: "en",
//   localePrefix: "as-needed",
// });

export default createMiddleware({
  locales,
  defaultLocale,
  // localePrefix: "as-needed",
  localePrefix,
  localeDetection: false,
});

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(bn|en)/:path*"],
// };

// export const config = {
//   // Matcher entries are linked with a logical "or", therefore
//   // if one of them matches, the middleware will be invoked.
//   matcher: [
//     // Match all pathnames except for
//     // - … if they start with `/api`, `/_next` or `/_vercel`
//     // - … the ones containing a dot (e.g. `favicon.ico`)
//     "/((?!api|_next|_vercel|.*\\..*).*)",
//     // However, match all pathnames within `/users`, optionally with a locale prefix
//     "/([\\w-]+)?/users/(.+)",
//   ],
// };

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
