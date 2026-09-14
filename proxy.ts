import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from '@/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
});

export const config = {
  // Match all request paths except for the ones starting with:
  // - api (API routes)
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - files with an extension (public assets)
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)']
};
