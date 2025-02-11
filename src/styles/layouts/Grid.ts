import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  $itemMinWidth?: number;
  $gap?: number;
  $columnGap?: number;
  $rowGap?: number;
  $colums?: number;
}
export const Grid = styled(motion.div)<Props>`
  --item-min-width: ${({ $itemMinWidth }) => `${$itemMinWidth}rem`};
  --gap: ${({ $gap }) => `${$gap}rem`};
  --row-gap: ${({ $rowGap }) => `${$rowGap}rem`};
  --column-gap: ${({ $columnGap }) => `${$columnGap}rem`};
  --columns: ${({ $colums }) => `${$colums ? $colums : "auto-fit"}`};

  display: grid;
  grid-template-columns: repeat(
    var(--columns),
    minmax(min(100%, var(--item-min-width)), 1fr)
  );
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
  grid-gap: var(--gap);
`;
