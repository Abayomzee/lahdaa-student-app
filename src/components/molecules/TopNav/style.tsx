/** @format */

import styled from "styled-components";
import { FlexRowJcBetweenAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div<{ $bgWhite?: boolean }>`
  background-color: ${({ $bgWhite }) => ($bgWhite ? "#ffffff" : "transparent")};
  top: 0;
  position: sticky;
  z-index: 3;
`;

export const Container = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 2rem;

  padding-block: 2rem;
`;
