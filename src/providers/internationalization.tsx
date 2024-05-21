import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

type NextIntlProviderProps = {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
};

const NextIntlProvider = ({ children, locale, messages }: NextIntlProviderProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default NextIntlProvider;
