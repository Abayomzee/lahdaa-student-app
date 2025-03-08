/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexColumn, FlexRowJcBetweenAiCenter } from "styles/Abstract/Mixins";

export const Wrapper = styled.div<{ $bgWhite?: boolean }>`
  background-color: ${({ $bgWhite }) => ($bgWhite ? "#ffffff" : "transparent")};
  top: 0;
  position: sticky;
  z-index: 3;
`;

export const Container = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 2rem;

  padding-block: 2rem;
`;

export const UserCtaContainer = styled.div`
  position: relative;
`;

export const UserDropdown = styled(motion.div)`
  position: absolute;
  top: 120%;
  right: 0;

  box-shadow: 0px 1px 1px 0px #0000001f;
  box-shadow: 0px 0px 0px 1px #676e7629;
  box-shadow: 0px 2px 5px 0px #676e7614;

  border-radius: 0.8rem;
  background-color: #ffffff;
  padding: 2rem;
  width: max-content;

  .links {
    margin-top: 2rem;
    ${FlexColumn}
    gap: 1.5rem;
  }

  .link-item {
    font-family: Inter;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 130%;
    color: #5e6061;

    text-decoration: none;
    cursor: pointer;
  }
`;
