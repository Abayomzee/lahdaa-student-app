/** @format */

import styled from "styled-components";
import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
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
  flex-direction: column;
  display: flex;
`;

export const Top = styled.div`
  height: 25.5rem;

  .workshop-image {
    ${ImageDefault}
  }
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
  flex-grow: 1;
`;

export const Ctas = styled.div`
  ${FlexRowJcBetweenAiCenter}
  padding: 3rem;

  .details-link {
    ${FlexRowAiCenter}
    gap: .8rem;

    font-family: "DM Sans";
    font-size: 1.5rem;
    font-weight: 600;
    color: #222222;
    text-decoration: none;
  }

  .details-cta {
    border: none;

    box-shadow: 0px 1px 1px 0px #ffffff1f;
    box-shadow: 0px 0px 0px 1px #ffffff29;
    box-shadow: 0px 2px 5px 0px #ffffff14;

    padding: 10px 18px;
    border-radius: 8px;
    background-color: #eef0ff;

    font-family: "DM Sans";
    font-size: 1.4rem;
    font-weight: 700;
    color: #5c4fff;
  }
`;
