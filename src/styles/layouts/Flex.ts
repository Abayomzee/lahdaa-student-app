import styled from "styled-components";
import {
  FlexRow,
  FlexRowReverse,
  FlexRowAiCenter,
  FlexRowJcBetween,
  FlexRowJcBetweenAiCenter,
  FlexRowWrapJcBetween,
  FlexRowJcBetweenAiEnd,
  FlexColumn,
  FlexRowJcCenterAiCenter,
} from "../Abstract/Mixins";

interface Props {
  // Flex rows
  $flexRow?: boolean;
  $flexRowReverse?: boolean;
  $flexRowAiCenter?: boolean;
  $flexRowJcBetween?: boolean;
  $flexRowJcBetweenAiCenter?: boolean;
  $flexRowJcCenterAiCenter?: boolean;
  $flexRowJcBetweenAiEnd?: boolean;

  // Flex row wraps
  $flexRowWrapJcBetween?: boolean;

  //   Flex columns
  $flexColumn?: boolean;
  $flexColumnReverse?: boolean;

  //   Flex gaps
  $gap?: string;
  $columnGap?: string;
  $rowGap?: string;
}
export const Flex = styled.div<Props>`
  ${({
    $flexRow,
    $flexRowReverse,
    $flexRowAiCenter,
    $flexRowJcBetween,
    $flexRowJcBetweenAiCenter,
    $flexRowJcCenterAiCenter,
    $flexRowJcBetweenAiEnd,
    $flexRowWrapJcBetween,
    $flexColumn,
    $flexColumnReverse,
  }) => {
    /* Rows */
    if ($flexRow) return `${FlexRow}`;
    if ($flexRowReverse) return `${FlexRowReverse}`;
    if ($flexRowAiCenter) return `${FlexRowAiCenter}`;
    if ($flexRowJcBetween) return `${FlexRowJcBetween}`;
    if ($flexRowJcBetweenAiCenter) return `${FlexRowJcBetweenAiCenter}`;
    if ($flexRowJcCenterAiCenter) return `${FlexRowJcCenterAiCenter}`;
    if ($flexRowJcBetweenAiEnd) return `${FlexRowJcBetweenAiEnd}`;
    if ($flexRowWrapJcBetween) return `${FlexRowWrapJcBetween}`;

    /* Columns */
    if ($flexColumn) return `${FlexColumn}`;
    if ($flexColumnReverse) return "flex-direction: column-reverse";
  }};

  ${({ $gap, $columnGap, $rowGap }) => {
    if ($gap) return `gap: ${$gap}`;
    if ($columnGap) return `column-gap: ${$columnGap}`;
    if ($rowGap) return `row-gap: ${$rowGap}`;
  }}
`;
