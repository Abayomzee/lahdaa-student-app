/** @format */

import styled from "styled-components";
import { FlexRowJcBetweenAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div``;

export const Divider = styled.div`
  gap: 1rem;
  ${FlexRowJcBetweenAiCenter}

  margin-block: 2rem;

  .line {
    flex-grow: 1;
    height: 0.1rem;
    background-color: #e3e6ea;
  }
`;
