/** @format */

import styled from "styled-components";
import {
  FlexRowAiCenter,
  FlexRowJcCenterAiCenter,
  ImageDefault,
} from "styles/Abstract/Mixins";

export const Wrapper = styled.div<{ $empty?: boolean }>`
  flex: 1 1 calc(33.33% - 16px);
  min-width: 250px;
  ${({ $empty }) =>
    $empty
      ? "opacity: 0; background-color: transparent "
      : " background-color: var(--color-white);"}

  border-radius: 1.57rem;
  overflow: hidden;
`;

export const Top = styled.div`
  height: 25.5rem;
  position: relative;

  .workshop-image {
    ${ImageDefault}
  }
`;

export const TopCta = styled.button`
  border: none;
  outline: none;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  ${FlexRowAiCenter}
  gap: .7rem;

  border-radius: 2.4rem;
  padding: 0.7rem 1.5rem;
  background-color: #00000099;
  backdrop-filter: blur(4px);

  font-family: "DM Sans";
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  text-transform: uppercase;
`;

export const Details = styled.div`
  ${FlexRowJcCenterAiCenter}

  border-bottom: 0.98px solid #e9e9e9;
  padding: 1.4rem;

  .details-item {
    &:not(:last-child) {
      padding-right: 3rem;
    }
    &:not(:first-child) {
      padding-left: 2rem;
      border-left: 0.98px solid var(--Container-divider, #0000001a);
    }
  }
`;

export const Description = styled.div`
  padding: 3rem;
  border-bottom: 0.98px solid #e9e9e9;
`;

export const PriceDetails = styled.div`
  padding: 3rem;
  border-bottom: 0.98px solid #e9e9e9;
`;

export const Ctas = styled.div`
  padding: 3rem;
`;
