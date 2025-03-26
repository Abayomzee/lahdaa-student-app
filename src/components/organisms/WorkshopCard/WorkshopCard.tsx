/** @format */

import React, { AllHTMLAttributes, useState } from "react";
import { Ctas, Description, Details, Top, Wrapper } from "./style";
import Typography from "components/atom/Typography";
import { Link } from "react-router";
import { ArrowRightIcon } from "components/atom/SvgIcon";
import dayjs from "dayjs";
import { _convertTo12HourFormat, getTimeDifference } from "utils/helper";
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

  // Data to display
  if ($empty) return <Wrapper $empty={$empty}></Wrapper>;

  return (
    <>
      <Wrapper>
        <Top>
          {$data?.thumbnail_file_url && (
            <img
              src={$data?.thumbnail_file_url}
              alt=""
              className="workshop-image"
            />
          )}
        </Top>
        <Details>
          <div className="details-item">
            <Typography as="h6" className="h4" text="Type" />
            <Typography as="p" className="p4" text="Workshop" />
          </div>
          <div className="details-item">
            <Typography
              as="h6"
              className="h4"
              text={`${dayjs($data?.course_times[0]?.start_date).format(
                "MMM D, YYYY"
              )}`}
            />
            {/* <Typography as="p" className="p4" text="Jan 9 - Jan 10, 2024" /> */}
            <Typography as="p" className="p4">
              {`${
                $data?.course_times[0]?.start_time
                  ? _convertTo12HourFormat($data?.course_times[0]?.start_time)
                  : "--"
              } -  ${
                $data?.course_times[0]?.end_time
                  ? _convertTo12HourFormat($data?.course_times[0]?.end_time)
                  : "--"
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
          <button className="details-cta" disabled>
            Join Now
          </button>
        </Ctas>
      </Wrapper>

      <AnimatePresence>
        {showDetails && (
          <WorkshopDetailsModal
            $data={$data}
            handleClose={() => setShowDetails(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkshopCard;
