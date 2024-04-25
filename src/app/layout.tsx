import type { Metadata } from "next";
import { OpenSauceOne, StyreneA } from "./fonts/index";
import "@pigment-css/react/styles.css";
import "./globals.css";
import { css } from "@pigment-css/react";
import Header from "./components/Header/index";

export const metadata: Metadata = {
  title: "Wayke Pigment CSS Evaluation",
  description: "Project to test and evaluate Pigment CSS",
};

const bodyClass = css(({ theme }) => ({
  margin: "0 auto",
  minHeight: "100vh",
  maxWidth: "1460px",
  display: "flex",
  flexDirection: "column",
  color: theme.colors.textPrimary,
  backgroundColor: theme.colors.backgroundGrey,
  fontFamily: "var(--font-open-sauce)",
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OpenSauceOne.variable} ${StyreneA.variable} ${bodyClass}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
