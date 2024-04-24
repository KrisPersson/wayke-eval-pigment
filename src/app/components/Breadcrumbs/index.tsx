import { css, styled } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Link from "next/link";
import { IBreadcrumb } from "../../types/index";

interface IisActive {
  isActive: boolean;
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
  textDecoration: ({ isActive }: IisActive) =>
    isActive ? "none" : "underline",
  cursor: ({ isActive }: IisActive) => (isActive ? "default" : "pointer"),
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
            <>
              <li key={breadcrumb.href} aria-current={breadcrumb.active}>
                <CrumbLink
                  href={breadcrumb.href}
                  disabled={breadcrumb.active}
                  isActive={breadcrumb.active}
                >
                  {breadcrumb.label}
                </CrumbLink>
              </li>
              {i < breadcrumbs.length - 1 && <span key={i}>/</span>}
            </>
          );
        })}
      </ol>
    </nav>
  );
}
