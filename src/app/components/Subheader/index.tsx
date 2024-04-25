import { css } from "@pigment-css/react";
import Container from "../Container/index";
import { size } from "../../layout/helpers";
import Breadcrumbs from "../Breadcrumbs/index";
import AnchorLinks from "../AnchorLinks/index";
import { IBreadcrumb, IAnchorLink } from "../../types/index";

interface IPageHeaderProps {
  pageName: string;
  breadcrumbs: IBreadcrumb[];
  anchorLinks: IAnchorLink[];
}

const innerClass = css({
  display: "flex",
  flexDirection: "column",
  gap: "var(--subheader-gap)",
});

const headingClass = css({
  fontSize: "3.5rem",
  margin: 0,
  lineHeight: size(8),
});

const hrClass = css({
  height: "1px",
  width: "100%",
  backgroundColor: "rgba(221, 221, 221, 1)",
  border: "none",
  margin: 0,
  marginTop: `${size(3)}`,
});

export default function Subheader({
  pageName,
  breadcrumbs,
  anchorLinks,
}: IPageHeaderProps) {
  return (
    <div aria-label="Page Header">
      <Container>
        <div className={innerClass}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h1 className={headingClass}>{pageName}</h1>
          <AnchorLinks anchorLinks={anchorLinks} />
        </div>
        <hr className={hrClass} />
      </Container>
    </div>
  );
}
