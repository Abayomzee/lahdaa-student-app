import styled from "styled-components";
import { FlexRowJcCenter, FlexRowJcEndAiCenter } from "styles/Abstract/Mixins";

export const ModalWrapper = styled.div`
  ${FlexRowJcCenter}
  width: 100%;
  transition: all.4s;
`;

export const ModalStyle = styled.div<{ width?: string }>`
  flex-basis: ${({ width }) => (width ? width : "56rem")};
  padding: 3rem;

  border-radius: 0.8rem;
  background-color: var(--color-white);
  box-shadow: var(--shadow-6);
  overflow: hidden;

  &.no-padding {
    padding: 0;

    .close-btn {
      display: none;
    }
  }
`;

export const ModalFooter = styled.div`
  ${FlexRowJcEndAiCenter}
  gap: 1rem;
  margin-top: 4rem;
`;
