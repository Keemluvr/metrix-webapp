import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "0",
        lg: "0",
        xl: "0",
        "2xl": "0"
      }
    },
    extend: {
      colors: {
        danger: {
          DEFAULT: "#CC5F5F"
        },
        gray: {
          DEFAULT: "#E1E2E9"
        },
        black: {
          DEFAULT: "#1C1D22",
          "100": "#BEC0CA",
          "200": "#A6A8B1",
          "300": "#8B8D97",
          "400": "#6E7079",
          "500": "#53545C",
          "600": "#45464E",
          "700": "#37393F",
          "800": "#33343A",
          "900": "#2C2D33"
        }
      },
      fontFamily: {
        inter: "var(--font-inter)",
        poppins: "var(--font-poppins)"
      },
      padding: {
        "8.5": "34px"
      },
      gap: {
        "7.5": "30px",
        "15": "60px"
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {},
      defaultTheme: "light",
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#F4F5FA",
            foreground: {
              "500": "#ABAFB1"
            },
            default: {
              DEFAULT: "#FFFFFF",
              "100": "#F6F6FB",
              "200": "#F0F0F7"
            },
            primary: {
              DEFAULT: "#5570F1",
              foreground: "#E1E2E9",
              "100": "#DBDEEE",
              "200": "#C4CAE8",
              "300": "#B6BFE8",
              "400": "#ABB5E9",
              "500": "#97A5EB",
              "600": "#8899E9",
              "700": "#7C8FEC",
              "800": "#6D83EC",
              "900": "#6078EC"
            },
            secondary: {
              DEFAULT: "#FFCC91",
              "100": "#FEF9F2",
              "200": "#FEF5EA",
              "300": "#FFF2E2",
              "400": "#FFF0DE",
              "500": "#FFEAD1",
              "600": "#FFE5C8",
              "700": "#FFDFBA",
              "800": "#FFDAAE",
              "900": "#FFD29E"
            }
          }
        },
        dark: {
          layout: {},
          colors: {}
        }
      }
    })
  ]
};

export default config;
