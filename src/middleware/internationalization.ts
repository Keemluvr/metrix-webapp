import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "@/constants/locales";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  localePrefix: "always"
});

export default intlMiddleware;
