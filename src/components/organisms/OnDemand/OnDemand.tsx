/** @format */

import React from "react";
import { Wrapper } from "./style";
import { EmptyDataState } from "components/molecules/EmptyDataState";
import { PageAnimation } from "components/templates/PageAnimation";

// Type defination
interface Props {}

// Component
const OnDemand: React.FC<Props> = () => {
  // Data to display
  return (
    <PageAnimation>
      <Wrapper>
        <EmptyDataState
          $label="Enroll Now"
          $subLabel="You will see all your enrolled courses here"
        />
      </Wrapper>
    </PageAnimation>
  );
};

export default OnDemand;
