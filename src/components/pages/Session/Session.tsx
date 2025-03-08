/** @format */

import React, { useEffect } from "react";
import { Sessions, Wrapper } from "./style";
import { Flex } from "styles/layouts/Flex";
import Typography from "components/atom/Typography";
import { TabNavigatorDark } from "components/molecules/TabNavigator";
import { CalenderNotification } from "components/molecules/CalenderNotification";
import { ConnectCalendarCta } from "components/molecules/CalenderNotification/style";
import { SessionCard } from "components/organisms/SessionCard";
import { PageAnimation } from "components/templates/PageAnimation";
import endpoints from "services/endpoints";
import { useApi } from "utils/hooks";
import { SpinnerContainer } from "styles/Components/SpinnerContainer";
import { SpinnerIcon } from "components/atom/SvgIcon";
import { EmptyDataState } from "components/molecules/EmptyDataState";

// Type defination
interface Props {}

// Component
const Session: React.FC<Props> = () => {
  // Api
  const sessionsApi = useApi<any>();

  // Methods
  const getSessions = async () => {
    await sessionsApi.sendRequest("POST", endpoints.workshopUrl, {
      course_type_id: 3,
    });
  };

  // Effects
  useEffect(() => {
    getSessions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to display
  return (
    <>
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

                <Sessions className="mt-20">
                  {sessionsApi?.data?.courses.map((course: any, i: any) => (
                    <SessionCard key={i} $data={course} />
                  ))}

                  <SessionCard $empty />
                  <SessionCard $empty />
                </Sessions>
              </>
            )}
          </Wrapper>
        </PageAnimation>
      )}
    </>
  );
};

export default Session;
