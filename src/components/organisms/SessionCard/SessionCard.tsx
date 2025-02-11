/** @format */

import React, { AllHTMLAttributes } from "react";
import {
  Ctas,
  Description,
  Details,
  PriceDetails,
  Top,
  TopCta,
  Wrapper,
} from "./style";
import Typography from "components/atom/Typography";
import { Link } from "react-router";
import { CalenderEmptyIcon, LinkIcon, StarIcon } from "components/atom/SvgIcon";
import { Flex } from "styles/layouts/Flex";
import { PrimaryButton } from "components/atom/button";
import { ConnectCalendarCta } from "components/molecules/CalenderNotification/style";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {
  $empty?: boolean;
}

// Component
const SessionCard: React.FC<Props> = (props) => {
  // Props
  const { $empty } = props;

  // Data to display
  if ($empty) return <Wrapper $empty={$empty}></Wrapper>;

  return (
    <Wrapper>
      <Top>
        <img
          src="/assets/images/session-img.png"
          alt=""
          className="workshop-image"
        />
        <TopCta>
          <CalenderEmptyIcon />
          Add to Calendar
        </TopCta>
      </Top>
      <Details>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Duration" />
          <Typography as="p" className="p4" text="60 mins" />
        </div>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Channel" />
          <Typography as="p" className="p4" text="Zoom" />
        </div>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Feb 15, 2023" />
          <Typography as="p" className="p4" text="06:10AM - 07:00AM WAT" />
        </div>
      </Details>
      <Description>
        <Flex $gap=".7rem" $flexRowAiCenter>
          <StarIcon />
          <Typography as="h5" className="h12" text="5.0" />
        </Flex>
        <Typography as="h5" className="h5 mb-5">
          <>
            Hamza Farooq <span>Chairman @ Microsoft</span>
          </>
        </Typography>

        <Typography as="h4" className="h6 mw-350">
          Building LLM applications from scratch into Production
        </Typography>
      </Description>

      <PriceDetails>
        <Flex $gap="1rem" $flexRowJcBetweenAiCenter>
          <Link to="#" className="l l5">
            See Meeting Brief
            <LinkIcon />
          </Link>

          <Typography as="h4" className="h13">
            <>
              $60<span>/hour</span>
            </>
          </Typography>
        </Flex>
      </PriceDetails>

      <Ctas>
        <PrimaryButton className="w-full">Start Meeting</PrimaryButton>
        <ConnectCalendarCta className="w-full mt-15">
          Reschedule
        </ConnectCalendarCta>
      </Ctas>
    </Wrapper>
  );
};

export default SessionCard;
