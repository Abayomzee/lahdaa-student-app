import styled from "styled-components";
import { FlexRowJcBetween } from "styles/Abstract/Mixins";

export const Wrapper = styled.button`
  gap: 1rem;
  ${FlexRowJcBetween}

  cursor: pointer;
  border: none;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid #ebeaed;
  background-color: var(--color-white);
`;
