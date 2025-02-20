/** @format */

import styled from "styled-components";
import { FlexRowJcBetweenAiCenter } from "styles/Abstract/Mixins";

export const WorkshopDetailsModalStyle = styled.div`
  /* width: 40rem; */
  /* margin-inline: auto; */
  background-color: #f1f1f1;

  .top {
    ${FlexRowJcBetweenAiCenter};
    gap: 1rem;

    padding: 1.5rem 2.5rem;
    border-bottom: 1px solid #f1f1f1b8;
    background-color: #ffffff;
    border-radius: 0.8rem;
  }
`;
