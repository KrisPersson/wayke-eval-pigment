import { css } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Container from "../Container/index";
import Link from "next/link";
import Image from "next/image";
import Subheader from "../Subheader/index";

const pageClass = css({
  marginBlock: size(8),
  display: "flex",
  flexDirection: "column",
  rowGap: size(8),
});

const pageSectionClass = css({});

const headingClass = css({
  margin: 0,
  marginBottom: size(2),
  fontSize: "1.5rem",
  lineHeight: "1.33",
});

const showMoreLinkClass = css(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: "1.5",
  color: theme.colors.textSecondary,
  display: "flex",
  alignItems: "center",
  gap: size(1),
  whiteSpace: "nowrap",
}));

const sectionHeaderClass = css({
  display: "flex",
  justifyContent: "space-between",
});

const arrowIconClass = css({
  margin: "auto 0",
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
  showMoreLink,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  heading: string;
  showMoreLink?: boolean;
}>) {
  return (
    <section id={id} className={pageSectionClass}>
      <Container>
        <header className={sectionHeaderClass}>
          <h2 className={headingClass}>{heading}</h2>
          {showMoreLink && (
            <Link href="#" className={showMoreLinkClass}>
              Visa alla
              <Image
                className={arrowIconClass}
                src="/icons/arrow-right.svg"
                width={24}
                height={24}
              />
            </Link>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
