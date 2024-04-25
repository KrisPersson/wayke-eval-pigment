import { css, styled } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Image from "next/image";

interface ICardBrandProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  numCars: number;
  numModels: number;
}

const cardBrandClass = css(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "64px 1fr 16px",
  padding: size(2),
  background: theme.colors.baseWhite,
  borderRadius: size(2.25),
}));

const imgClass = css({
  gridColumn: "1 / span 1",
  alignSelf: "center",
  objectFit: "contain",
  objectPosition: "center",
});

const infoBoxClass = css({
  gridColumn: "2 / span 1",
  lineHeight: "1.4",
  padding: `${size(1.5)} ${size(1)}`,
});

const infoDataClass = css({
  display: "flex",
  alignItems: "center",
  gap: size(0.5),
  marginTop: size(0.5),
});

const h3Class = css({
  margin: 0,
  fontSize: "1.25rem",
});

const pClass = css({
  margin: 0,
  fontSize: "0.875rem",
});

const arrowIconClass = css({
  gridColumn: "3 / -1",
  alignSelf: "center",
});

const DotDivider = styled("div")(({ theme }) => ({
  width: "4px",
  height: "4px",
  borderRadius: "100vmax",
  backgroundColor: theme.colors.textSecondary,
}));

export default function CardBrand({
  imgSrc,
  title,
  numCars,
  numModels,
  imgAlt,
}: ICardBrandProps) {
  return (
    <article className={cardBrandClass}>
      <Image
        width={64}
        height={64}
        src={imgSrc}
        alt={imgAlt}
        className={imgClass}
      />
      <div className={infoBoxClass}>
        <div>
          <h3 className={h3Class}>{title}</h3>
          <div className={infoDataClass}>
            <p className={pClass}>
              {numCars} {numCars === 1 ? "bil" : "bilar"}
            </p>
            <DotDivider />
            <p className={pClass}>
              {numModels} {numModels === 1 ? "modell" : "modeller"}
            </p>
          </div>
        </div>
      </div>
      <Image
        className={arrowIconClass}
        src="/icons/arrow-right.svg"
        width={20}
        height={20}
        alt="Arrow right icon"
        aria-hidden
      />
    </article>
  );
}
