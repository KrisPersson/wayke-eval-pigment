import "@pigment-css/react/styles.css";
import "../globals.css";
import { css } from "@pigment-css/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
