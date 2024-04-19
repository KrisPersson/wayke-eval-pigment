import { css } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Image from "next/image";

interface ICardProductProps {
  imgSrc: string;
  title: string;
  numListings: number;
  lowestPrice: number;
}

const cardProductClass = css({
  display: "flex",
  flexDirection: "column",
});

const imgWrapperClass = css({});

export default function CardProduct({
  imgSrc,
  title,
  numListings,
  lowestPrice,
}: ICardProductProps) {
  return (
    <article className={cardProductClass}>
      <div className={imgWrapperClass}>
        <Image width={415} height={312} src={imgSrc} />
      </div>
      <div>
        <div>
          <h3>{title}</h3>
          <p>
            {numListings} {numListings === 1 ? "annons" : "annonser"}
          </p>
        </div>
        <div>
          <p>Köp från</p>
          <p>{lowestPrice} kr</p>
        </div>
      </div>
    </article>
  );
}
