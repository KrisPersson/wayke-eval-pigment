import { styled } from "@pigment-css/react";
import { size } from "../../layout/helpers";

export const UlGrid = styled.ul`
  min-width: 1280px;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-left: 0;
  margin: 0;
  list-style: none;
  gap: 16px;
`;
