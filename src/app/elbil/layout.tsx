import "@pigment-css/react/styles.css";
import "../globals.css";
import { css } from "@pigment-css/react";
import Subheader from "../components/Subheader/index";

const bodyClass = css({
  margin: 0,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Subheader pageName={"Elbil"} />
      {children}
    </>
  );
}
