/** @format */

import React from "react";

import { Flex } from "styles/layouts/Flex";
import { Session } from "components/pages/Session";
import { Workshop } from "components/pages/Workshop";
import { OnDemand } from "components/pages/OnDemand";
import { TabNavigator } from "components/molecules/TabNavigator";
import { MyLearningTemplate } from "components/templates/MyLearningTemplate";
import useTabs from "utils/hooks/useTabs";

// Type defination
interface Props {}

// Component
const MyLearning: React.FC<Props> = () => {
  // Data
  const tabs = [
    {
      label: "Workshops",
      slug: "workshop/upcoming",
      name: "workshop",
      component: <Workshop />,
      tabLevel: 1,
    },
    {
      label: "1-on-1 Session",
      slug: "session/upcoming",
      name: "session",
      component: <Session />,
      tabLevel: 1,
    },
    {
      label: "On Demand Course",
      slug: "on-demand/ongoing",
      name: "on-demand",
      component: <OnDemand />,
      tabLevel: 1,
    },
    // Session tabs
    {
      label: "Upcoming",
      slug: "session/upcoming",
      component: <Session />,
      tabLevel: 2,
    },
    {
      label: "Completed",
      slug: "session/completed",
      component: <Session />,
      tabLevel: 2,
    },
    {
      label: "Missed",
      slug: "session/missed",
      component: <Session />,
      tabLevel: 2,
    },
    {
      label: "Wishlist",
      slug: "session/wishlist",
      component: <Session />,
      tabLevel: 2,
    },
  ];

  // Hooks
  const { activeTab } = useTabs(tabs, "/student/learning", 1);

  // Data to display
  return (
    <MyLearningTemplate>
      <Flex className="mt-30 mb-50" $flexRowJcCenterAiCenter>
        <TabNavigator
          $tabs={tabs.filter((t) => t?.tabLevel === 1)}
          $activeTab={activeTab}
        />
      </Flex>

      {activeTab && activeTab.component}
    </MyLearningTemplate>
  );
};

export default MyLearning;
