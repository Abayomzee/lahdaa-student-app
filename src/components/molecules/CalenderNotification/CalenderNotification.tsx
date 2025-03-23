/** @format */

import React from "react";
import { gapi } from "gapi-script";

import { ConnectCalendarCta, Wrapper } from "./style";
import { Flex } from "styles/layouts/Flex";
import { CalenderNotiIcon } from "components/atom/SvgIcon";
import Typography from "components/atom/Typography";

// Type defination
interface Props {}

// Component
const CalenderNotification: React.FC<Props> = () => {
  // Method
  const signIn = () => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then((user: any) => {
        console.log("User Signed In:", user);
      });
  };

  const listEvents = async () => {
    const response = await gapi.client.calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    });

    console.log("Events:", response.result.items);
  };

  const addEvent = async () => {
    const event = {
      summary: "React Meeting",
      location: "Online",
      description: "Discussing React and Google API",
      start: {
        dateTime: new Date().toISOString(),
        timeZone: "Africa/Lagos",
      },
      end: {
        dateTime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), // 1 hour later
        timeZone: "Africa/Lagos",
      },
    };

    const response = await gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,
    });

    console.log("Event Created:", response);
  };

  const signOut = () => {
  gapi.auth2.getAuthInstance().signOut();
  console.log("User Signed Out");
};



  // Data to display
  return (
    <Wrapper>
      <Flex $gap="1rem" $flexRowAiCenter>
        <CalenderNotiIcon />
        <Typography
          as="h6"
          className="h3"
          text="Get real-time updates on all your sessions!"
        />
      </Flex>

      <ConnectCalendarCta onClick={signIn}>Connect calendar</ConnectCalendarCta>
    </Wrapper>
  );
};

export default CalenderNotification;
