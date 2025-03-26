/** @format */

import React from "react";

import useTabs from "utils/hooks/useTabs";
import { Flex } from "styles/layouts/Flex";
import { Session } from "components/organisms/Session";
import { Workshop } from "components/organisms/Workshop";
import { OnDemand } from "components/organisms/OnDemand";
import { TabNavigator } from "components/molecules/TabNavigator";
import { MyLearningTemplate } from "components/templates/MyLearningTemplate";

// Google Calendar API
// const CLIENT_ID =
//   "226878313650-0oirlul4vcfssgl76uto3cc4a8f6hvdc.apps.googleusercontent.com";
// const API_KEY = "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";
// const SCOPES = "https://www.googleapis.com/auth/calendar.events";

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
    // Workshop tabs
    {
      label: "Upcoming",
      slug: "workshop/upcoming",
      component: <Workshop />,
      tabLevel: 2,
    },
    {
      label: "Completed",
      slug: "workshop/completed",
      component: <Workshop />,
      tabLevel: 2,
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
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       scope: SCOPES,
  //       discoveryDocs: [
  //         "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  //       ],
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // }, []);

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
