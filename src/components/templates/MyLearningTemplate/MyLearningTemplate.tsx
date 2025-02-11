/** @format */

import React, { AllHTMLAttributes } from "react";
import { Body, Wrapper } from "./style";
import { DashboardTopNav } from "components/molecules/TopNav";
import { Center } from "styles/layouts/Center";
import Typography from "components/atom/Typography";
import { TabNavigator } from "components/molecules/TabNavigator";
import { Flex } from "styles/layouts/Flex";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {}

// Component
const MyLearningTemplate: React.FC<Props> = (props) => {
  // Props
  const {children, ...otherProps} = props

  // Data to display
  return (
    <Wrapper {...otherProps}>
      <DashboardTopNav />
      <Center>
        <Body>
          <Typography as="h4" className="h9 text-center" text="My Learning" />
          <Flex className="mt-30 mb-50" $flexRowJcCenterAiCenter>
            <TabNavigator />
          </Flex>

          {children}
        </Body>
      </Center>
    </Wrapper>
  );
};

export default MyLearningTemplate;
