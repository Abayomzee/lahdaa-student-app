/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Flex } from "styles/layouts/Flex";
import { Session } from "components/pages/Session";
import { Workshop } from "components/pages/Workshop";
import { OnDemand } from "components/pages/OnDemand";
import { TabNavigator } from "components/molecules/TabNavigator";
import { MyLearningTemplate } from "components/templates/MyLearningTemplate";

// Type defination
interface Props {}

// Component
const MyLearning: React.FC<Props> = () => {
  // States
  const [activeTab, setTab] = useState<any>();

  // Hooks
  let { tab } = useParams();

  // Data
  const tabs = [
    {
      label: "Workshops",
      slug: "workshop",
      component: <Workshop />,
    },
    {
      label: "1-on-1 Session",
      slug: "session",
      component: <Session />,
    },
    {
      label: "On Demand Course",
      slug: "on-demand",
      component: <OnDemand />,
    },
  ];

  // Effects
  useEffect(() => {
    const index = tabs.findIndex((t) => t.slug === tab);

    if (index >= 0) {
      setTab(tabs[index]);
    } else {
      setTab(tabs[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  // Data to display
  return (
    <MyLearningTemplate>
      <Flex className="mt-30 mb-50" $flexRowJcCenterAiCenter>
        <TabNavigator $tabs={tabs} $activeTab={activeTab} />
      </Flex>

      {activeTab && activeTab.component}
    </MyLearningTemplate>
  );
};

export default MyLearning;
