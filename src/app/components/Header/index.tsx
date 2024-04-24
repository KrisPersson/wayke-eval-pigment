import { css } from "@pigment-css/react";
import Image from "next/image";
import Container from "../Container/index";
import Navigation from "../Navigation/index";

const headerClass = css({
  paddingTop: "24px",
  marginBottom: "var(--subheader-gap)",
});

const innerClass = css({
  display: "flex",
  justifyContent: "space-between",
});

export default function Header() {
  return (
    <header className={headerClass}>
      <Container>
        <div className={innerClass}>
          <Image src="/logo/wayke.svg" width={189} height={42} quality={100} />
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
