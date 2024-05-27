import { css } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Image from "next/image";

interface ICardProductProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  numListings: number;
  lowestPrice: string;
}

const cardProductClass = css({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
});

const imgWrapperClass = css({
  borderRadius: "18px",
  overflow: "hidden",
});

const imgClass = css({
  objectFit: "cover",
  objectPosition: "center",
});

const infoBoxClass = css({
  display: "flex",
  justifyContent: "space-between",
  lineHeight: "1.4",
  padding: `${size(1.5)} ${size(1)}`,
});

const h3Class = css({
  margin: 0,
  fontSize: "1.25rem",
});

const pClass = css({
  margin: 0,
  fontSize: "0.875rem",
  maxWidth: "40ch",
});

export default function CardProduct({
  imgSrc,
  title,
  numListings,
  lowestPrice,
  imgAlt,
}: ICardProductProps) {
  return (
    <article className={cardProductClass}>
      <div className={imgWrapperClass}>
        <Image
          width={426}
          height={316}
          src={imgSrc}
          alt={imgAlt}
          className={imgClass}
        />
      </div>
      <div className={infoBoxClass}>
        <div>
          <h3 className={h3Class}>{title}</h3>
          <p className={pClass}>
            {numListings} {numListings === 1 ? "annons" : "annonser"}
          </p>
        </div>
        <div style={{ textAlign: "right", margin: "auto 0" }}>
          <p className={pClass} style={{ fontSize: "0.75rem" }}>
            Köp från
          </p>
          <p className={pClass}>{lowestPrice} kr</p>
        </div>
      </div>
    </article>
  );
}
