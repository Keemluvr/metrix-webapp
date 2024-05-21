import { Queries, render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { ReactElement } from "react";
import messages from "../../messages/en.json";

export const renderClientComponent = (ui: ReactElement, ...options: Queries[]) =>
  render(ui, {
    wrapper: ({ children }) => (
      <NextIntlClientProvider locale="en" messages={messages}>
        <div id={"test-root"}>{children}</div>
      </NextIntlClientProvider>
    ),
    ...options
  });
