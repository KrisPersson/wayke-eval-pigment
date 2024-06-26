import { css, styled } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import { IBreadcrumb } from "../../types/index";

interface IisActive {
  isactive: boolean | undefined;
}

const listClass = css({
  paddingLeft: 0,
  margin: 0,
  listStyle: "none",
  display: "flex",
  gap: size(0.5),
});

const CrumbLink = styled("a")(({ theme }) => ({
  color: theme.colors.textSecondary,

  variants: [
    {
      props: { isactive: "active" },
      style: { cursor: "default", textDecoration: "none" },
    },
    {
      props: { isactive: "not" },
      style: { cursor: "pointer", textDecoration: "underline" },
    },
  ],
}));

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: IBreadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumbs">
      <ol className={listClass}>
        {breadcrumbs.map((breadcrumb, i: number) => {
          return (
            <li key={breadcrumb.href} aria-current={breadcrumb.active}>
              <CrumbLink
                href={breadcrumb.href}
                isactive={breadcrumb.active ? "active" : "not"}
              >
                {breadcrumb.label}
              </CrumbLink>
              {i < breadcrumbs.length - 1 && <span key={i}> /</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
