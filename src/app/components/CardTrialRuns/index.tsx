import { css, styled } from "@pigment-css/react";
import { size } from "../../layout/helpers";
import Image from "next/image";
import Link from "next/link";

interface ICardTrialRunsProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const cardTrialRunsClass = css({
  display: "flex",
  flexDirection: "column",
});

const imgWrapperClass = css({
  overflow: "hidden",
});

const imgClass = css({
  alignSelf: "center",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: size(2.25),
});

const infoBoxClass = css({
  display: "flex",
  justifyContent: "space-between",
  lineHeight: "1.33",
  padding: `${size(1.5)} ${size(1)}`,
});

const h3Class = css({
  margin: 0,
  fontSize: "1.25rem",
  lineHeight: "1.4",
});

const pClass = css({
  margin: 0,
  fontSize: "0.75rem",
});

const arrowIconClass = css({
  alignSelf: "center",
});

const showVideoClass = css(({ theme }) => ({
  fontSize: "0.75rem",
  lineHeight: "1.33",
  color: theme.colors.textSecondary,
  display: "flex",
  alignItems: "center",
  gap: size(0.5),
}));

const DotDivider = styled("div")(({ theme }) => ({
  width: "4px",
  height: "4px",
  borderRadius: "100vmax",
  backgroundColor: theme.colors.textSecondary,
}));

export default function CardTrialRuns({
  imgSrc,
  title,
  imgAlt,
}: ICardTrialRunsProps) {
  return (
    <article className={cardTrialRunsClass}>
      <div className={imgWrapperClass}>
        <Image
          width={632}
          height={250}
          src={imgSrc}
          alt={imgAlt}
          className={imgClass}
        />
      </div>
      <div className={infoBoxClass}>
        <div>
          <p className={pClass}>Provkörning</p>
          <h3 className={h3Class}>{title}</h3>
        </div>
        <Link href="#" className={showVideoClass}>
          Visa video
          <Image
            className={arrowIconClass}
            src="/icons/arrow-right.svg"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </article>
  );
}
