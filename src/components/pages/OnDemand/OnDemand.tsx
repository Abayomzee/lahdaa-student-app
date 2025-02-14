/** @format */

import React from "react";
import { Wrapper } from "./style";
import { EmptyDataState } from "components/molecules/EmptyDataState";

// Type defination
interface Props {}

// Component
const OnDemand: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <EmptyDataState
        $label="Enroll Now"
        $subLabel="You will see all your enrolled courses here"
      />
    </Wrapper>
  );
};

export default OnDemand;
