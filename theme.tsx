import { extendTheme } from "@pigment-css/nextjs-plugin";

import type { ExtendTheme } from "@pigment-css/react/theme";

export const theme = extendTheme({
  breakpoint: {
    Sm: "@media (min-width: 600px)",
    LtSm: "@media (max-width: 599px)",
    Md: "@media (min-width: 900px)",
    LtMd: "@media (max-width: 899px)",
    Lg: "@media (min-width: 1200px)",
    LtLg: "@media (max-width: 1199px)",
  },
  font: {
    family: {
      main: "DM Sans, sans-serif",
    },
    lineHeight: {
      main: "1.5",
      alt: "1.1",
    },
    weight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    size: {
      xsmall: "0.75rem",
      small: "0.875rem",
      regular: "1rem",
      large: "1.125rem",
      xlarge: "1.25rem",
      xxlarge: "2rem",
      xxxlarge: "2.125rem",
      xxxxlarge: "5.125rem",
    },
  },
  size: {
    baseUnit: "8px",
    containerMaxWidth: "1496px",
  },
});

export type Theme = typeof theme;

declare module "@pigment-css/react/theme" {
  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: Theme;
    }>;
  }
}
