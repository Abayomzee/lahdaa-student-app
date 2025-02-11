import styled from "styled-components";
import { FlexRowJcBetweenAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;

  padding: 1.5rem 2rem;
  border-radius: 0.8rem;
  background-color: #eef0ff;
  max-width: 58.1rem;
`;

export const ConnectCalendarCta = styled.button`
  border: none;
  background-color: transparent;

  font-family: "DM Sans";
  font-size: 1.3rem;
  font-weight: 500;
  color: #5c4fff;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;
