import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {};

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


export default withPigment(nextConfig, {
    theme
});
