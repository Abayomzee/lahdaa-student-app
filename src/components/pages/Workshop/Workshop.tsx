/** @format */

import React from "react";
import { Workshops, Wrapper } from "./style";
import { Flex } from "styles/layouts/Flex";
import Typography from "components/atom/Typography";
import { TabNavigatorDark } from "components/molecules/TabNavigator";
import { WorkshopCard } from "components/organisms/WorkshopCard";

// Type defination
interface Props {}

// Component
const Workshop: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
        <Typography as="h4" className="h10" text="Workshop" />

        <TabNavigatorDark $navs={["Upcoming", "Completed"]} />
      </Flex>

      <Workshops className="mt-15">
        {Array.from({ length: 7 }).map(() => (
          <WorkshopCard />
        ))}

        <WorkshopCard $empty />
        <WorkshopCard $empty />
      </Workshops>
    </Wrapper>
  );
};

export default Workshop;
