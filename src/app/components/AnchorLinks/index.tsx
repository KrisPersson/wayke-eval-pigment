import { IAnchorLink } from "../../types/index";
import Link from "next/link";
import { css, styled } from "@pigment-css/react";
import { size } from "../../layout/helpers";

const ulClass = css({
  paddingLeft: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  gap: size(2),
});

const linkClass = css(({ theme }) => ({
  color: theme.colors.textSecondary,
}));

export default function AnchorLinks({
  anchorLinks,
}: {
  anchorLinks: IAnchorLink[];
}) {
  return (
    <ul className={ulClass}>
      {anchorLinks.map((link, i) => {
        return (
          <li key={link.href}>
            <Link className={linkClass} href={link.href}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
