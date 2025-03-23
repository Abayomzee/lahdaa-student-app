/** @format */

import React, { useEffect } from "react";
import { gapi } from "gapi-script";

import useTabs from "utils/hooks/useTabs";
import { Flex } from "styles/layouts/Flex";
import { Session } from "components/organisms/Session";
import { Workshop } from "components/organisms/Workshop";
import { OnDemand } from "components/organisms/OnDemand";
import { TabNavigator } from "components/molecules/TabNavigator";
import { MyLearningTemplate } from "components/templates/MyLearningTemplate";

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

  // Effects
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: process.env.GOOGLE_API_KEY,
        clientId: process.env.GOOGLE_CLIENT_ID,
        scope: process.env.GOOGLE_SCOPES,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
        ],
      });
    }

    gapi.load("client:auth2", start);
  }, []);

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
