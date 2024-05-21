import { NextRequest } from "next/server";
import { locales } from "./constants/locales";
import intlMiddleware from "./middleware/internationalization";
import authMiddleware from "./middleware/auth";

const securePages = ["admin"];
const excludePattern = new RegExp("^(?:/(?:" + locales.join("|") + "))?/(?:" + securePages.join("|") + ")(?:/|$)");

const isPublicPage = (req: NextRequest): boolean => {
  return !excludePattern.test(req.nextUrl.pathname);
};

export default function middleware(req: NextRequest) {
  if (isPublicPage(req)) {
    return intlMiddleware(req);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/", `/(en|pt)/:path*`]
};
