/** @format */

import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div``;

export const LabelStyle = styled.label`
  font-family: "DM Sans";
  font-size: 1.45rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: inline-block;
  color: #1d1d20;
`;

export const TextInputWrapperStyle = styled.div`
  ${FlexRowAiCenter}
  /* gap: 1.6rem; */

  border: 1px solid var(--color-2);
  padding-inline: 1.4rem;
  border-radius: 0.6rem;

  &.no-space {
    padding-inline: 0;
  }

  &.space {
    padding-inline: 1.4rem;
  }
`;

export const TextInputStyle = styled.input`
  width: 100%;
  padding: 1.6rem;
  padding-left: 1.2rem;
  border: none;
  border-radius: 0.6rem;

  &::placeholder {
    font-family: "DM Sans";
    font-size: 1.35rem;
    font-weight: 400;
    color: var(--color-7);
  }

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;

export const PasswordCtaStyle = styled.button`
  all: unset;
  cursor: pointer;
`;

export const OtpInputWrapper = styled.div`
  ${FlexRowAiCenter}
  gap: 2rem;
`;

export const OtpInputStyle = styled.input`
  border: 1px solid var(--color-6);
  padding-block: 2.4rem;
  text-align: center;
  max-width: 7.8rem;

  font-family: "DM Sans";
  font-size: 3rem;
  font-weight: 500;

  &:active,
  &:focus {
    outline: none;
  }
`;

// Select Input
export const SelectInputStyle = styled.select<{ $selected?: boolean }>`
  width: 100%;
  padding: 1.6rem;
  padding-left: 0.8rem;
  border: none;
  border-radius: 0.6rem;
  ${({ $selected }) => ($selected ? `` : "color:  var(--color-7);")};

  &::placeholder {
    font-family: "DM Sans";
    font-size: 1.35rem;
    font-weight: 400;
    color: var(--color-7);
  }

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
`;
