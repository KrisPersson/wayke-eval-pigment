import { css, styled } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Image from "next/image";
import Link from "next/link";

const navWrapperClass = css({
  display: "flex",
  gap: size(4),
});

const navClass = css({
  display: "flex",
  alignItems: "center",
});

const primaryUlClass = css(({ theme }) => ({
  paddingLeft: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: size(3),
  [theme.breakpoint.LtMd]: {
    display: "none",
  },
}));

const secondaryUlClass = css({
  paddingLeft: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: size(1.5),
});

const navLinkTextClass = css(({ theme }) => ({
  color: theme.colors.textPrimary,
  fontWeight: 500,
  textDecoration: "none",
  fontFamily: "var(--font-styrene)",
  fontSize: "0.875rem",
}));

const LinkDivider = styled.div(({ theme }) => ({
  borderLeft: `1px solid ${theme.colors.foregroundGrey}`,
  height: size(5.25),
  ariaHidden: true,
  display: "none",
  [theme.breakpoint.Sm]: {
    display: "block",
  },
}));

export default function Navigation() {
  return (
    <div className={navWrapperClass}>
      <nav className={navClass} aria-label="Primary">
        <ul className={primaryUlClass}>
          <li>
            <Link className={navLinkTextClass} href="#">
              Köp bil
            </Link>
          </li>
          <li>
            <Link className={navLinkTextClass} href="#">
              Sälj bil
            </Link>
          </li>
          <li>
            <Link className={navLinkTextClass} href="#">
              Värdera bil
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={navClass} aria-label="Secondary">
        <ul className={secondaryUlClass}>
          <li>
            <Link href="#">
              <Image
                src="/icons/header/icon-search.png"
                width={32}
                height={32}
                quality={100}
                alt="Search-icon"
              />
            </Link>
          </li>
          <LinkDivider />
          <li>
            <Link href="#">
              <Image
                src="/icons/header/icon-user.png"
                width={32}
                height={32}
                quality={100}
                alt="User-icon"
              />
            </Link>
          </li>
          <LinkDivider />
          <li>
            <Link href="#">
              <Image
                src="/icons/header/icon-hamburger.png"
                width={32}
                height={32}
                quality={100}
                alt="Hamburger menu-icon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
