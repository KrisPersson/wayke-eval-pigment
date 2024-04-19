import { css } from "@pigment-css/react";
import Container from "../Container/index";
import { size } from "../../layout/helpers";

interface IPageHeaderProps {
  pageName: string;
}

const wrapperClass = css({
  padding: "2px",
});

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

export default function Subheader({ pageName }: IPageHeaderProps) {
  return (
    <div className={wrapperClass} aria-label="Page Header">
      <Container>
        <div className={innerClass}>
          <div>Breadcrumbs</div>
          <h1 className={headingClass}>{pageName}</h1>
          <div>Anchor Links</div>
        </div>
        <hr className={hrClass} />
      </Container>
    </div>
  );
}
