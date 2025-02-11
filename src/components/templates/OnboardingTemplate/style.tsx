/** @format */

import styled from "styled-components";
import { FlexRowJcCenterAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.main`
  height: 100vh;
  overflow-y: auto;
  background-color: #f3f3f3;
`;

export const Container = styled.section`
  padding-top: 12rem;
  padding-bottom: 10rem;
`;

export const ContainerCardWrapper = styled.section`
  ${FlexRowJcCenterAiCenter}
`;

export const ContainerCard = styled.div<{ $contentSize?: string }>`
  flex-basis: ${({ $contentSize }) =>
    $contentSize ? $contentSize : "52.5rem"};
  box-shadow: 0px 8px 16px 0px #3031331a;
  box-shadow: 0px 0px 1px 0px #3031330d;
  background-color: #ffffff;
  border-radius: 1.6rem;
  padding: 4rem;
`;
