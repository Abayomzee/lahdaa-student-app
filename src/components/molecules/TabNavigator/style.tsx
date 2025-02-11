import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  gap: 3rem;
  ${FlexRowAiCenter}

  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--color-white);
`;

export const TabNav = styled.button`
  border: none;
  background-color: transparent;

  cursor: pointer;
  font-weight: 400;
  font-size: 1.4rem;
  font-family: Inter;
  position: relative;

  &.active {
    &::after {
      height: 0.2rem;
    }
  }

  &::after {
    left: 0;
    top: 140%;
    width: 100%;
    content: "";
    transition: 0.4s;
    position: absolute;
    background-color: #5c4fff;
  }
`;

export const DarkWrapper = styled.div`
  ${FlexRowAiCenter}

  border-radius: .5rem;
  background-color: var(--color-white);
  width: fit-content;
  overflow: hidden;
`;

export const TabNavDark = styled.button`
  border: none;
  background-color: var(--color-white);
  padding: 1.5rem;

  cursor: pointer;
  font-family: "DM Sans";
  font-size: 1.4rem;
  font-weight: 400;
  color: #030229;
  transition: all.2s;

  &.active {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;
