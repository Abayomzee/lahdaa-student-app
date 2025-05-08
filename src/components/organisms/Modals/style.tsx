/** @format */

import styled from "styled-components";
import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  ImageDefault,
} from "styles/Abstract/Mixins";

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
  .body {
    padding: 2rem 2rem 3rem;
  }

  .thumbnail {
    max-height: 269px;
    border-radius: 16px;
    overflow: hidden;

    img {
      ${ImageDefault}
    }
  }
`;

export const CalenderCta = styled.button`
  border: none;
  outline: none;
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

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const DetailsTimeNLocation = styled.div`
  ${FlexRowAiCenter}
  border-block: 1px solid #dadada;
  padding-block: 2.3rem;
`;

export const DetailsDate = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 0.8rem;

  .DetailsDate__top {
    background-color: #e6e6e6;
    padding: 0.3rem 1.7rem;
  }
  .DetailsDate__body {
    padding: 0.7rem 1.2rem;
  }
`;

export const AddressCard = styled.div`
  border: 1px solid #ffffff;
  box-shadow: 0px 1px 4px 0px #0000001a;
  padding-inline: 1.3rem;
  background-color: #ffffff;
  border-radius: 1.2rem;

  .AddressCard__top {
    padding: 1rem 2rem;
    border-bottom: 1px solid #e1e1e1;
  }

  .AddressCard__body {
    padding: 5rem 0 2.3rem;
  }
`;
