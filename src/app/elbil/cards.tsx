import CardProduct from "../components/CardProduct/index";
import CardBrand from "../components/CardBrand/index";
import CardTrialRuns from "../components/CardTrialRuns/index";
import { elbilar } from "./data/products";
import { trademarks } from "./data/trademarks";
import { provkorningar } from "./data/trial-runs";
import { parsePrice } from "../layout/helpers";
import Link from "next/link";
import { css } from "@pigment-css/react";

const linkClass = css(({ theme }) => ({
  color: theme.colors.textPrimary,
  textDecoration: "none",
}));

export const popModelsProducts = elbilar.popular.map((item, i: number) => {
  return (
    <li key={i + item.model}>
      <Link href="#" className={linkClass}>
        <CardProduct
          imgSrc={`/photos/cars/electric/${item.imgSrc}`}
          imgAlt={`Image of a ${item.model} with a scenic background`}
          title={item.model}
          numListings={item.numListings}
          lowestPrice={parsePrice(item.lowestPrice) as string}
        />
      </Link>
    </li>
  );
});

export const goFarModelsProducts = elbilar.goFar.map((item, i: number) => {
  return (
    <li key={i + item.model}>
      <Link href="#" className={linkClass}>
        <CardProduct
          imgSrc={`/photos/cars/electric/${item.imgSrc}`}
          imgAlt={`Image of a ${item.model} with a scenic background`}
          title={item.model}
          numListings={item.numListings}
          lowestPrice={parsePrice(item.lowestPrice) as string}
        />
      </Link>
    </li>
  );
});

export const trademarkBrands = trademarks.map((item, i: number) => {
  return (
    <li key={i + item.name}>
      <Link href="#" className={linkClass}>
        <CardBrand
          imgSrc={`/icons/trademarks/${item.iconSrc}`}
          imgAlt={`${item.name} with a scenic background`}
          title={item.name}
          numCars={item.numCars}
          numModels={item.numModels}
        />
      </Link>
    </li>
  );
});

export const trialRuns = provkorningar.map((item, i: number) => {
  return (
    <li key={i + item.model}>
      <Link href="#" className={linkClass}>
        <CardTrialRuns
          imgSrc={`/photos/trialruns/${item.imgSrc}`}
          imgAlt={`${item.model}`}
          title={item.model}
        />
      </Link>
    </li>
  );
});
