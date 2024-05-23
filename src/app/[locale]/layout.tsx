import NextIntlProvider from "@/providers/internationalization";
import { getMessages } from "next-intl/server";
import { inter, poppins } from "../fonts";
import Providers from "@/providers";
import clsx from "clsx";
import "../globals.css";

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
