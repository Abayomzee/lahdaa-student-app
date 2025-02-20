/** @format */

import React, { AllHTMLAttributes, useState } from "react";
import { Ctas, Description, Details, Top, Wrapper } from "./style";
import Typography from "components/atom/Typography";
import { Link } from "react-router";
import { ArrowRightIcon } from "components/atom/SvgIcon";
import dayjs from "dayjs";
import { getTimeDifference } from "utils/helper";
import { AnimatePresence } from "framer-motion";
import { WorkshopDetailsModal } from "../Modals";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {
  $empty?: boolean;
  $data?: any;
}

// Component
const WorkshopCard: React.FC<Props> = (props) => {
  // State
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // Props
  const { $empty, $data } = props;

  /**
   * {
    "id": "262",
    "course_name": "Become a High Impact UX Researcher Part 2",
    "course_type": "2",
    "sub_title": null,
    "course_overview": "The skills necessary to become a top UX researcher have shifted. In today's landscape of layoffs, AI, and tight budgets, being a successful UX researcher takes more than simply good research skills—it takes business acumen. Join Carol as she interviews Judd, a seasoned pro, who will share actionable insights and tips on thriving in this dynamic environment.",
    "class_size": null,
    "course_category": "2",
    "level_of_competence": "1",
    "course_requirements": null,
    "outcomes": null,
    "about_course": null,
    "course_availability": null,
    "thumbnail_file_url": "https://api.steviapro.com/storage/uploads/thumbnails/1739910130_12hGIuCzLEkW6dmM2vYLpO1eg.avif",
    "promo_video_url": "https://www.youtube.com/watch?v=_5Y7xDb2Brw",
    "course_rating": null,
    "price": null,
    "ng_price": "0",
    "is_free_course": "0",
    "country": null,
    "start_date": null,
    "end_date": null,
    "is_discounted": "0",
    "discount_price": null,
    "is_published": "1",
    "created_by": "40",
    "created_at": "2025-02-18 20:22:10",
    "updated_at": null,
    "is_deleted": "0",
    "is_featured_course": "0",
    "language": "19",
    "location": "online",
    "description": null,
    "link_to_more_information": "https://docs.google.com/document/d/1syFmAJ042bwzNHaBs4Ed7IHoCmikw1oyao5eR_vJdKM/edit?usp=drive_link",
    "last_day_to_enrol": null,
    "link_to_document": null,
    "timezone": null,
    "session_duration": null,
    "meeting_link": "https://meet.google.com/iwd-tktn-ptd",
    "instructor_data": [
        {
            "phone_number": null,
            "email": null,
            "professional_title": "Co-founder",
            "profile_picture_url": "https://api.steviapro.com/storage/uploads/profile_pictures/1730131462_IMG_1310-2.jpg",
            "profile_url": "temitope-niyi-ktCpPVv",
            "about_you": "Investor in 150+ companies, including Affirm, Reddit, Ro, Relativity, Archer etc. I also coach ambitious founders on building world class companies. \r\n\r\nThings I can advise on:\r\n- startups\r\n- fundraising\r\n- raise money vs bootstrapping\r\n- selling your company vs IPO\r\n- product \r\n- finding product market\r\n- early stage investing\r\n- operations \r\n- how to find great talent\r\n- hiring & managing\r\n- how to evaluate companies to invest in\r\n\r\nI love helping others, especially entrepreneurs. I can’t wait to help you along your business journey!",
            "name": "Temitope Niyi"
        }
    ],
    "course_times": [
        {
            "course_time_id": "200",
            "course_time_uuid": "398440ec-1352-49c5-9ef3-0362a5ec22dc",
            "course_id": "262",
            "start_date": "2025-03-01",
            "end_date": null,
            "start_time": "21:00",
            "end_time": "22:30",
            "timezone": "46",
            "is_deleted": "0",
            "created_by": "40",
            "created_at": "2025-02-18 20:22:10",
            "updated_at": null
        }
    ],
    "other_course_instructors": [
        {
            "course_instructor_id": "341",
            "course_instructor_uuid": "33513488-1ce4-4759-9434-66367d9a75b9",
            "course_id": "262",
            "email": null,
            "is_deleted": "0",
            "created_by": "40",
            "created_at": "2025-02-18 20:22:10",
            "updated_at": "2025-02-18 13:22:10"
        }
    ],
    "course_outcomes": [
        {
            "course_outcome_id": "186",
            "course_id": "262",
            "topic": "Discover Top Success Drivers for UX Researchers",
            "description": "Learn what are the top skills for success (hint: it's less about the research!), and examples of those skills in action.",
            "created_by": "40",
            "created_at": "2025-02-18 20:23:18",
            "updated_at": "2025-02-18 20:23:18",
            "is_deleted": "0"
        },
        {
            "course_outcome_id": "187",
            "course_id": "262",
            "topic": "Identify Time Wasters",
            "description": "Learn to spot time-wasting activities and how to reduce them so you can focus on what truly matters.",
            "created_by": "40",
            "created_at": "2025-02-18 20:23:18",
            "updated_at": "2025-02-18 20:23:18",
            "is_deleted": "0"
        },
        {
            "course_outcome_id": "188",
            "course_id": "262",
            "topic": "Develop the Top Skills",
            "description": "Hear specific examples of what you can start doing TODAY to build the skills necessary to excel.",
            "created_by": "40",
            "created_at": "2025-02-18 20:23:18",
            "updated_at": "2025-02-18 20:23:18",
            "is_deleted": "0"
        }
    ],
    "course_prices": [
        {
            "course_price_id": "410",
            "course_price_uuid": "b38a29b3-b4b9-4900-888c-0d796cb68496",
            "currency": "19",
            "price": "50",
            "promo_price": "40",
            "course_id": "262",
            "created_by": "40",
            "is_deleted": "0",
            "created_at": "2025-02-18 20:22:10",
            "updated_at": "2025-02-18 20:22:10"
        },
        {
            "course_price_id": "411",
            "course_price_uuid": "7c066ad4-c162-4fb3-bc19-7e79c0517d5c",
            "currency": "76",
            "price": "25000",
            "promo_price": "20000",
            "course_id": "262",
            "created_by": "40",
            "is_deleted": "0",
            "created_at": "2025-02-18 20:22:10",
            "updated_at": "2025-02-18 20:22:10"
        }
    ]
}
   */

  // Data to display
  if ($empty) return <Wrapper $empty={$empty}></Wrapper>;

  return (
    <>
      <Wrapper>
        <Top>
          <img
            src={$data?.thumbnail_file_url}
            alt=""
            className="workshop-image"
          />
        </Top>
        <Details>
          <div className="details-item">
            <Typography as="h6" className="h4" text="Type" />
            <Typography as="p" className="p4" text="Workshop" />
          </div>
          <div className="details-item">
            <Typography as="h6" className="h4" text="Date" />
            {/* <Typography as="p" className="p4" text="Jan 9 - Jan 10, 2024" /> */}
            <Typography as="p" className="p4">
              {`${dayjs($data?.course_times[0]?.start_date).format(
                "MMM D"
              )} -  ${
                $data?.course_times[0]?.end_date
                  ? dayjs($data?.course_times[0]?.end_date).format(
                      "MMM D, YYYY"
                    )
                  : "??"
              }`}
            </Typography>
          </div>
          <div className="details-item">
            <Typography as="h6" className="h4" text="Duration" />
            <Typography as="p" className="p4">
              {getTimeDifference(
                $data?.course_times[0]?.start_time,
                $data?.course_times[0]?.end_time
              )}
            </Typography>
          </div>
        </Details>
        <Description>
          <Typography as="h5" className="h5 mb-5">
            <>
              <span>By</span> {$data?.instructor_data[0]?.name || "--"}
            </>
          </Typography>

          <Typography as="h4" className="h6 mw-350">
            {$data?.course_name || "--"}
            {/* Building LLM applications from scratch into Production */}
          </Typography>
        </Description>
        <Ctas>
          <Link
            to="#"
            className="details-link"
            onClick={() => setShowDetails(true)}
          >
            See Details <ArrowRightIcon />
          </Link>
          <button className="details-cta">Join Now</button>
        </Ctas>
      </Wrapper>

      <AnimatePresence>
        {showDetails && (
          <WorkshopDetailsModal
            data={{}}
            handleClose={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkshopCard;
