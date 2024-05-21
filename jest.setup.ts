import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import messages from "./src/messages/en.json";

jest.mock("react-hook-form", () => ({
  useForm: jest.fn().mockReturnValue({
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      setValue: jest.fn(),
      getValues: jest.fn().mockReturnValue({}),
      formState: {
        errors: {}
      }
    }
  }),
  useController: jest.fn()
}));

jest.mock("next-intl", () => ({
  useTranslations: () => (id: string) => id

  //   useTranslations: (key: keyof typeof messages) => {
  //     const t = (phrase: keyof (typeof messages)[key]) => messages[key][phrase];
  //     t.rich = (key: string, vars: Record<string, unknown>) => {
  //       return vars ? `${key} ${JSON.stringify(vars)}` : key;
  //     };
  //     return t;
  //   }
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn()
    };
  },
  usePathname() {
    return "/";
  },
  useParams() {
    return { locale: "en" };
  }
}));
