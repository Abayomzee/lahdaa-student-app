/** @format */

import React from "react";
import { Workshops, Wrapper } from "./style";
import { Flex } from "styles/layouts/Flex";
import Typography from "components/atom/Typography";
import { TabNavigatorDark } from "components/molecules/TabNavigator";
import { CalenderNotification } from "components/molecules/CalenderNotification";
import { ConnectCalendarCta } from "components/molecules/CalenderNotification/style";
import { SessionCard } from "components/organisms/SessionCard";

// Type defination
interface Props {}

// Component
const Session: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
        <Typography as="h4" className="h10" text="Sessions" />
        <CalenderNotification />
      </Flex>

      <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
        <TabNavigatorDark
          $navs={["Upcoming", "Completed", "Missed", "Wishlist"]}
        />
        <Flex $gap="1.5rem" $flexRowAiCenter>
          <Typography as="h4" className="h11">
            <>
              The session timings are following your local timezone{" "}
              <b>Africa/Lagos</b>
            </>
          </Typography>
          <ConnectCalendarCta>Update timezone</ConnectCalendarCta>
        </Flex>
      </Flex>

      <Workshops className="mt-20">
        {Array.from({ length: 7 }).map(() => (
          <SessionCard />
        ))}

        <SessionCard $empty />
        <SessionCard $empty />
      </Workshops>
    </Wrapper>
  );
};

export default Session;
