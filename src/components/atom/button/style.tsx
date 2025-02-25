/** @format */

import styled from "styled-components";
import { FlexRowJcCenterAiCenter } from "styles/Abstract/Mixins";
import { rotateAnimation } from "styles/Base/Animation";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  &:active,
  &:focus {
    outline: none;
  }

  /* Sizes */
  &.size-1 {
    padding-block: 1.7rem;
    padding-inline: 1rem;
  }

  &.size-2 {
    padding-block: 1.2rem;
    padding-inline: 1rem;
  }

  /* Types */
  &.with-spinner {
    ${FlexRowJcCenterAiCenter}
    gap: 1rem;

    svg {
      animation: ${rotateAnimation} 1s linear infinite;
      transform-origin: center;
    }
  }
`;

export const PrimaryButtonWrapper = styled(Button)`
  background-color: var(--color-1);
  font-family: "DM Sans";
  font-size: 1.4rem;
  font-weight: 600;

  color: var(--color-white);

  padding: 1rem 2.5rem;
  border-radius: 0.6rem;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const IconButtonWrapper = styled(Button)`
  ${FlexRowJcCenterAiCenter}

  gap: 1.2rem;
  font-weight: 400;
  font-size: 1.6rem;
  padding: 1rem 2.5rem;
  border-radius: 0.8rem;
  color: var(--color-3);
  font-family: "DM Sans";
  border: 0.1rem solid var(--color-2);

  &.user-nav-cta {
    gap: 1rem;
    padding: 0.5rem 1.2rem;
    border-radius: 9999px;
    border: 0.1rem solid #d8d8d8;
  }

  &.link-icon-cta {
    gap: 1rem;
    padding: 1.2rem 2rem;
    border-radius: 0.4rem;
    border: 1px solid #5c4fff;

    color: #0000ff;
  }
`;
