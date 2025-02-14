/** @format */

import React, { AllHTMLAttributes } from "react";

import { Body, Wrapper } from "./style";
import { Center } from "styles/layouts/Center";

import { DashboardTopNav } from "components/molecules/TopNav";
import Typography from "components/atom/Typography";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {}

// Component
const MyLearningTemplate: React.FC<Props> = (props) => {
  // Props
  const { children, ...otherProps } = props;

  // Data to display
  return (
    <Wrapper {...otherProps}>
      <DashboardTopNav />
      <Center>
        <Body>
          <Typography as="h4" className="h9 text-center" text="My Learning" />

          {/* <Outlet /> */}
          {children}
        </Body>
      </Center>
    </Wrapper>
  );
};

export default MyLearningTemplate;
