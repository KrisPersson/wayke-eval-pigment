import type { Metadata } from "next";
import { OpenSauceOne } from "./fonts/index";
import "@pigment-css/react/styles.css";
import "./globals.css";
import { css } from "@pigment-css/react";
import Header from "./components/Header/index";

export const metadata: Metadata = {
  title: "Wayke Pigment CSS Evaluation",
  description: "Project to test and evaluate Pigment CSS",
};

const bodyClass = css({
  margin: 0,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OpenSauceOne.className} ${bodyClass}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
