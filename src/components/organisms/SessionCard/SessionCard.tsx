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
import dayjs from "dayjs";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {
  $empty?: boolean;
  $data?: any;
}

// Component
const SessionCard: React.FC<Props> = (props) => {
  // Props
  const { $empty, $data } = props;

  // Data to display
  if ($empty) return <Wrapper $empty={$empty}></Wrapper>;

  /**
   * {
    "id": "255",
    "course_name": "Software Architecture",
    "course_type": "3",
    "sub_title": null,
    "course_overview": null,
    "class_size": null,
    "course_category": "6",
    "level_of_competence": null,
    "course_requirements": null,
    "outcomes": null,
    "about_course": "Software architecture refers to the high-level structure of a software system, defining how its components are designed, organized, and interact with one another. It serves as a blueprint that guides the development, deployment, and maintenance",
    "course_availability": null,
    "thumbnail_file_url": null,
    "promo_video_url": "https://www.youtube.com/watch?v=ZTVAs9cNo30",
    "course_rating": null,
    "price": null,
    "ng_price": "0",
    "is_free_course": null,
    "country": null,
    "start_date": null,
    "end_date": null,
    "is_discounted": "0",
    "discount_price": null,
    "is_published": "1",
    "created_by": "1",
    "created_at": "2025-01-08 15:11:35",
    "updated_at": null,
    "is_deleted": "0",
    "is_featured_course": "0",
    "language": null,
    "location": null,
    "description": null,
    "link_to_more_information": null,
    "last_day_to_enrol": null,
    "link_to_document": null,
    "timezone": null,
    "session_duration": "120 mins",
    "meeting_link": "https://meet.google.com/kjd-rcyx-dyh",
    "course_prices": [
        {
            "course_price_id": "395",
            "course_price_uuid": "45a69dcd-d2f1-4709-b82c-46fabafa49cf",
            "currency": "19",
            "price": "500",
            "promo_price": null,
            "course_id": "255",
            "created_by": "1",
            "is_deleted": "0",
            "created_at": "2025-01-08 15:11:35",
            "updated_at": "2025-01-08 15:11:35"
        },
        {
            "course_price_id": "396",
            "course_price_uuid": "69d9965e-3811-4ba1-a886-3e5b32e6c4c3",
            "currency": "11",
            "price": "450",
            "promo_price": null,
            "course_id": "255",
            "created_by": "1",
            "is_deleted": "0",
            "created_at": "2025-01-08 15:11:35",
            "updated_at": "2025-01-08 15:11:35"
        },
        {
            "course_price_id": "397",
            "course_price_uuid": "5bfb9ce7-c066-47a5-81c1-612d2faf4d4c",
            "currency": "76",
            "price": "6500",
            "promo_price": null,
            "course_id": "255",
            "created_by": "1",
            "is_deleted": "0",
            "created_at": "2025-01-08 15:11:35",
            "updated_at": "2025-01-08 15:11:35"
        }
    ]
}
   */

  return (
    <Wrapper>
      <Top>
        {$data?.thumbnail_file_url && (
          <img
            src={$data?.thumbnail_file_url}
            alt=""
            className="workshop-image"
          />
        )}
        <TopCta>
          <CalenderEmptyIcon />
          Add to Calendar
        </TopCta>
      </Top>
      <Details>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Duration" />
          <Typography as="p" className="p4">
            {`${$data?.session_duration}`}
          </Typography>
        </div>
        <div className="details-item">
          <Typography as="h6" className="h4" text="Channel" />
          <Typography as="p" className="p4" text="??" />
        </div>
        <div className="details-item">
          <Typography
            as="h6"
            className="h4"
            text={`${
              $data?.start_date
                ? dayjs($data?.start_date).format("MMM D, YYYY")
                : "Date ??"
            }`}
          />
          <Typography as="p" className="p4" text="Time ?? - Time ?? WAT" />
          {/* <Typography as="p" className="p4" text="06:10AM - 07:00AM WAT" /> */}
        </div>
      </Details>
      <Description>
        <Flex $gap=".7rem" $flexRowAiCenter>
          <StarIcon />
          <Typography
            as="h5"
            className="h12"
            text={$data?.course_rating || "??"}
          />
        </Flex>
        <Typography as="h5" className="h5 mb-5">
          <>
            {/* {$data?.instructor_data[0]?.name || "--"}{" "}
            <span>{$data?.instructor_data[0]?.professional_title} @ ??</span> */}
          </>
        </Typography>

        <Typography as="h4" className="h6 mw-350">
          {$data?.course_name || "--"}
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
