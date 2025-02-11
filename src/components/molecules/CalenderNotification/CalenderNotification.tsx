import React from 'react';
import { ConnectCalendarCta, Wrapper } from './style'
import { Flex } from 'styles/layouts/Flex';
import { CalenderNotiIcon } from 'components/atom/SvgIcon';
import Typography from 'components/atom/Typography';

// Type defination
interface Props {}

// Component
const CalenderNotification:React.FC<Props> = () => {

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

      <ConnectCalendarCta>Connect calendar</ConnectCalendarCta>
    </Wrapper>
  );
}

export default CalenderNotification;