/** @format */

import React, { useEffect, useState } from "react";

import { Wrapper } from "./style";
import { Flex } from "styles/layouts/Flex";
import Typography from "components/atom/Typography";
import { TabNavigatorDark } from "components/molecules/TabNavigator";
import { CalenderNotification } from "components/molecules/CalenderNotification";
import { ConnectCalendarCta } from "components/molecules/CalenderNotification/style";
import { PageAnimation } from "components/templates/PageAnimation";
import endpoints from "services/endpoints";
import { useApi } from "utils/hooks";
import { SpinnerContainer } from "styles/Components/SpinnerContainer";
import { SpinnerIcon } from "components/atom/SvgIcon";
import { EmptyDataState } from "components/molecules/EmptyDataState";
import useTabs from "utils/hooks/useTabs";
import { UpcomingSession } from "../../organisms/UpcomingSession";

// Type defination
interface Props {}

// Component
const Session: React.FC<Props> = () => {
  // Api
  const sessionsApi = useApi<any>();
  
  // State
  const [data, setData] = useState([]);
  
  // Data
  const sessionTabUrl = "/student/learning";
  const tabs = [
    {
      label: "Upcoming",
      slug: "session/upcoming",
      name: "upcoming",
      component: (
        <UpcomingSession $data={data} $loading={sessionsApi?.loading} />
      ),
    },
    {
      label: "Completed",
      slug: "session/completed",
      name: "completed",
      component: (
        <EmptyDataState
          $label="Enroll Now Completed"
          $subLabel="You will see all your enrolled courses here"
        />
      ),
    },
    // {
    //   label: "Missed",
    //   slug: "session/missed",
    //   name: "missed",
    //   component: (
    //     <EmptyDataState
    //       $label="Enroll Now Missed"
    //       $subLabel="You will see all your enrolled courses here"
    //     />
    //   ),
    // },
    {
      label: "Wishlist",
      slug: "session/wishlist",
      name: "wishlist",
      component: (
        <EmptyDataState
          $label="Enroll Now Wishlist"
          $subLabel="You will see all your enrolled courses here"
        />
      ),
    },
  ];

  //  Hooks
  const { activeTab, tabLevel2Name } = useTabs(tabs, sessionTabUrl, 1);

  // Methods
  const getSessions = async () => {
    const sessionCategories: any = {
      upcoming: endpoints.studentUpcomingCoursesUrl,
      completed: endpoints.studentCompletedCoursesUrl,
      wishlist: endpoints.studentCourseWishlistUrl,
      missed: endpoints.studentOngoingCoursesUrl, //*************** */
    };
    // studentCoursesUrl
    const fff = await sessionsApi.sendRequest(
      "POST",
      sessionCategories[tabLevel2Name],
      {
        course_type_id: 3,
      }
    );
    setData(fff?.data);
  };

  // Effects
  useEffect(() => {
    getSessions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabLevel2Name]);

  // Data to display
  return (
    <>
      <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
        <Typography as="h4" className="h10" text="Sessions" />
        <CalenderNotification />
      </Flex>

      <Flex className="mb-50" $gap="1rem" $flexRowJcBetweenAiCenter>
        <TabNavigatorDark $navs={tabs} $url={sessionTabUrl} />

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

      {sessionsApi.loading ? (
        <SpinnerContainer>
          <PageAnimation>
            <SpinnerIcon width={22} height={22} className="with-spinner" />
          </PageAnimation>
        </SpinnerContainer>
      ) : (
        <PageAnimation>
          <Wrapper>
            {!sessionsApi.data?.courses?.length ? (
              <EmptyDataState
                $label="Enroll Now"
                $subLabel="You will see all your enrolled courses here"
              />
            ) : (
              <>
                {activeTab && activeTab.component}

                {/* <Sessions className="mt-20">
                  {sessionsApi?.data?.courses.map((course: any, i: any) => (
                    <SessionCard key={i} $data={course} />
                  ))}

                  <SessionCard $empty />
                  <SessionCard $empty />
                </Sessions> */}
              </>
            )}
          </Wrapper>
        </PageAnimation>
      )}
    </>
  );
};

export default Session;
