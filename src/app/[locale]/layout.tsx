import NextIntlProvider from "@/providers/internationalization";
import { getMessages } from "next-intl/server";
import { inter, poppins } from "../fonts";
import clsx from "clsx";
import "../globals.css";
import Providers from "@/providers";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={clsx(inter.variable, poppins.variable)}>
      <body className="font-inter">
        <NextIntlProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlProvider>
      </body>
    </html>
  );
}
