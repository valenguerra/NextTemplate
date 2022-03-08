import styled from "styled-components";
import { layout, position, space } from "styled-system";
import { cssFlexbox } from "../util/custom-properties";

export const Flexbox = styled.div`
  display: flex;
  ${cssFlexbox}
  ${position}
  ${layout}
  ${space}
`;

export const Column = styled(Flexbox)`
  flex-direction: column;
`;

export const Row = styled(Flexbox)`
  flex-direction: row;
`;
