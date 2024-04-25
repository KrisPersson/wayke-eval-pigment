import { Page, PageSection } from "../components/Page/index";
import { UlGrid } from "../components/Grid/index";
import { css, styled } from "@pigment-css/react";
import {
  popModelsProducts,
  goFarModelsProducts,
  trademarkBrands,
  trialRuns,
} from "./cards";
import Subheader from "../components/Subheader/index";
import { anchorLinks } from "./data/anchor-links";
import { crumbs } from "./data/breadcrumbs";

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

const GridListCardTrialRuns = styled(UlGrid)`
  > * {
    grid-column: auto / span 6;
  }
`;

const overflowControlClass = css({
  overflow: "scroll",
});

export default function Elbilar() {
  return (
    <Page>
      <Subheader
        pageName="Elbil"
        breadcrumbs={crumbs}
        anchorLinks={anchorLinks}
      />
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
      <PageSection id="section-trial-runs" heading="Provkörningar">
        <div className={overflowControlClass}>
          <GridListCardTrialRuns>
            {trialRuns.length > 0 ? (
              trialRuns
            ) : (
              <div>Oops! Could not find any videos :(</div>
            )}
          </GridListCardTrialRuns>
        </div>
      </PageSection>
    </Page>
  );
}
