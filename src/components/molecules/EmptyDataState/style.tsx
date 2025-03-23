/** @format */

import styled from "styled-components";
import { FlexColumnJcCenterAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  ${FlexColumnJcCenterAiCenter}

  max-width: 90rem;
  margin-inline: auto;
  padding: 10rem;
  border-radius: 2.4rem;

  box-shadow: 0px 1px 1px 0px #0000001f;
  box-shadow: 0px 0px 0px 1px #676e7629;
  box-shadow: 0px 2px 5px 0px #676e7614;
  background-color: #ffffff;

  &.full {
    width: 100%;
  }
`;
