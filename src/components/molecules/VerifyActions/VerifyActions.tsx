/** @format */

import React from "react";
import { Wrapper } from "./style";
import { Flex } from "styles/layouts/Flex";
import { CaretRightIcon, MessageIcon } from "components/atom/SvgIcon";
import Typography from "components/atom/Typography";

// Type defination
interface Props {
  $title?: string;
  $description?: string;
}

// Component
const VerifyActions: React.FC<Props> = (props) => {
  // Props
  const { $title, $description } = props;

  // Data to display
  return (
    <Wrapper>
      <Flex $gap="1.6rem" $flexRow>
        <MessageIcon />
        <div style={{ marginTop: -8 }}>
          <Typography
            as="h5"
            className="h2 text-left mb-10"
            text={$title ? $title : "--"}
          />
          <Typography as="p" className="p2 text-left mw-216">
            {$description ? $description : "--"}
          </Typography>
        </div>
      </Flex>

      <CaretRightIcon />
    </Wrapper>
  );
};

export default VerifyActions;
