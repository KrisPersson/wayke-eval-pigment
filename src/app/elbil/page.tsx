import { Page, PageSection } from "../components/Page/index";
import { UlGrid } from "../components/Grid/index";
import { css, styled } from "@pigment-css/react";
import CardProduct from "../components/CardProduct/index";
import CardBrand from "../components/CardBrand/index";
import { elbilar } from "../data/products";
import { trademarks } from "../data/trademarks";
import { parsePrice } from "../layout/helpers";

const GridListCardProducts = styled(UlGrid)`
  > * {
    grid-column: auto / span 4;
  }
`;

const GridListCardBrands = styled(UlGrid)`
  > * {
    grid-column: auto / span 3;
  }
`;

const overflowControlClass = css({
  overflow: "scroll",
});

const popModelsProducts = elbilar.popular.map((item, i: number) => {
  return (
    <li key={i}>
      <CardProduct
        imgSrc={`/photos/cars/electric/${item.imgSrc}`}
        imgAlt={`Image of a ${item.model}`}
        title={item.model}
        numListings={item.numListings}
        lowestPrice={parsePrice(item.lowestPrice) as string}
      />
    </li>
  );
});

const goFarModelsProducts = elbilar.goFar.map((item, i: number) => {
  return (
    <li key={i}>
      <CardProduct
        imgSrc={`/photos/cars/electric/${item.imgSrc}`}
        imgAlt={`Image of a ${item.model}`}
        title={item.model}
        numListings={item.numListings}
        lowestPrice={parsePrice(item.lowestPrice) as string}
      />
    </li>
  );
});
const trademarkBrands = trademarks.map((item, i: number) => {
  return (
    <li key={i}>
      <CardBrand
        imgSrc={`/icons/trademarks/${item.iconSrc}`}
        imgAlt={`${item.name}`}
        title={item.name}
        numCars={item.numCars}
        numModels={item.numModels}
      />
    </li>
  );
});

export default function Elbilar() {
  return (
    <Page>
      <PageSection id="section-popular-models" heading="Populära modeller">
        <div className={overflowControlClass}>
          <GridListCardProducts>
            {popModelsProducts.length > 0 ? (
              popModelsProducts
            ) : (
              <div>Oops! Could not find any products :(</div>
            )}
          </GridListCardProducts>
        </div>
      </PageSection>
      <PageSection
        id="section-go-far-models"
        heading="Elbilar som tar dig långt"
        showMoreLink
      >
        <div className={overflowControlClass}>
          <GridListCardProducts>
            {goFarModelsProducts.length > 0 ? (
              goFarModelsProducts
            ) : (
              <div>Oops! Could not find any products :(</div>
            )}
          </GridListCardProducts>
        </div>
      </PageSection>
      <PageSection id="section-trademarks" heading="Varumärken">
        <div className={overflowControlClass}>
          <GridListCardBrands>
            {trademarkBrands.length > 0 ? (
              trademarkBrands
            ) : (
              <div>Oops! Could not find any trademarks :(</div>
            )}
          </GridListCardBrands>
        </div>
      </PageSection>
    </Page>
  );
}
