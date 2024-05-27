import { IAnchorLink } from "../../types/index";
import Link from "next/link";
import { css } from "@pigment-css/react";
import { size } from "../../layout/helpers";

import { Theme } from "../../../../theme";

const ulClass = css(({ theme }: Theme) => ({
  paddingLeft: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: size(2),
  [theme.breakpoint.Sm]: {
    flexDirection: "row",
  },
}));

const linkClass = css(({ theme }: Theme) => ({
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
