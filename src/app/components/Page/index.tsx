import { css } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Container from "../Container/index";

const pageClass = css({
  marginBlock: size(8),
  display: "flex",
  flexDirection: "column",
  rowGap: size(8),
});

const pageSectionClass = css({});

const headingClass = css({
  margin: 0,
  fontSize: "1.5rem",
});

export function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={pageClass}>{children}</main>;
}

export function PageSection({
  children,
  id,
  heading,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  heading: string;
}>) {
  return (
    <section id={id} className={pageSectionClass}>
      <Container>
        <h2 className={headingClass}>{heading}</h2>
        {children}
      </Container>
    </section>
  );
}
