import { css } from "@pigment-css/react";
import "../../globals.css";

const containerClass = css({
  paddingInline: "var(--gutter)",
});

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={containerClass}>{children}</div>;
}
