/** @format */

import React, { useEffect } from "react";
import { Modal } from "components/molecules/Modal";
import { ModalsProps } from "./types";
import {
  AddressCard,
  CalenderCta,
  DetailsDate,
  DetailsTimeNLocation,
  WorkshopDetailsModalStyle,
} from "./style";
import {
  CalenderEmptyIcon,
  CloseModalIcon,
  Link2Icon,
  MapPinIcon,
} from "components/atom/SvgIcon";
import Typography from "components/atom/Typography";
import {
  IconButton,
  NormalButton,
  PrimaryButton,
} from "components/atom/button";
import { Flex } from "styles/layouts/Flex";
import { Countdown } from "components/atom/Countdown";
import dayjs from "dayjs";
import { _convertTo12HourFormat, _getMeetingPlatformName } from "utils/helper";
import { Link } from "react-router";

// Component
const WorkshopDetailsModal: React.FC<ModalsProps> = (props) => {
  // Props
  const { handleClose, $data } = props;

  // Data
  const workshopLocations: any = {
    in_person: "in_person",
    online: "online",
  };

  // Method
  const handleDirection = () => {
    const workshopLocation =
      workshopLocations[$data?.location] === "in_person"
        ? // ? `https://www.google.com/maps/dir/?api=1&destination=${$data?.description}`
          `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${$data?.description}`
        : `${$data?.meeting_link}`;

    return workshopLocation || "#";
  };

  // Effects
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to display
  return (
    <Modal
      modalWidth="50rem"
      className="no-padding"
      $position="right"
      hideFooter
    >
      <WorkshopDetailsModalStyle>
        <div className="top">
          <Typography as="h5" className="h14" text={"Workshop"} />

          <NormalButton onClick={handleClose}>
            <CloseModalIcon />
          </NormalButton>
        </div>
        <div className="body">
          <Typography as="h4" className="h15 text-center">
            <>
              <Countdown
                targetDate={$data?.course_times[0]?.start_date}
                startTime={$data?.course_times[0]?.start_time}
              />
            </>
          </Typography>
          <div className="thumbnail mt-25">
            <img src={$data?.thumbnail_file_url} alt="" />
          </div>
          <CalenderCta className="mx-auto mt-25">
            <CalenderEmptyIcon />
            Add to Calendar
          </CalenderCta>
          <Typography as="h5" className="h5 mb-5 mt-30">
            <>
              <span>Taught By</span> {$data?.instructor_data[0]?.name || "--"}
            </>
          </Typography>
          <Typography as="h4" className="h6 mw-350">
            {$data?.course_name || "--"}
          </Typography>
          <DetailsTimeNLocation className="mt-30">
            <DetailsDate>
              <div className="DetailsDate__top">
                <Typography
                  as="h5"
                  className="h16 text-center"
                  text={`${dayjs($data?.course_times[0]?.start_date).format(
                    "MMM"
                  )}`}
                />
              </div>
              <div className="DetailsDate__body">
                <Typography
                  as="h5"
                  className="h17 text-center"
                  text={`${dayjs($data?.course_times[0]?.start_date).format(
                    "D"
                  )}`}
                />
              </div>
            </DetailsDate>
            <div className="ml-10">
              {/* <Typography as="h5" className="h18" text="Monday, June 9" /> */}
              <Typography
                as="h5"
                className="h18"
                text={`${dayjs($data?.course_times[0]?.start_date).format(
                  "dddd, MMM D"
                )}`}
              />
              {/* <Typography as="p8" className="p8" text="2:00 PM - 4:00 PM UTC" /> */}
              <Typography
                as="p8"
                className="p8"
                text={`${
                  $data?.course_times[0]?.start_time
                    ? _convertTo12HourFormat($data?.course_times[0]?.start_time)
                    : "--"
                } -  ${
                  $data?.course_times[0]?.end_time
                    ? _convertTo12HourFormat($data?.course_times[0]?.end_time)
                    : "--"
                } ${$data?.course_times[0].timezone_abbr}`}
              />
            </div>
            <Flex className="ml-30" $gap=".4rem" $flexRowAiCenter>
              <MapPinIcon />

              <Flex $gap=".4rem" $flexRowAiCenter>
                <Typography as="h5" className="h19" text="Where:" />
                <Typography
                  as="h5"
                  className="p8 mt-3"
                  text={`${
                    workshopLocations[$data?.location] === "in_person"
                      ? "Physical"
                      : "Online"
                  }`}
                />
              </Flex>
            </Flex>
          </DetailsTimeNLocation>
          {/* getMeetingPlatformName */}
          <AddressCard className="mt-30">
            <div className="AddressCard__top">
              <Typography
                as="h5"
                className="h19 text-center text-uppercase"
                text="Events coming soon"
              />
            </div>
            <div className="AddressCard__body">
              <Flex className="mb-30" $gap="1.5rem" $flexRowAiCenter>
                <MapPinIcon />
                <div>
                  <Typography
                    as="h5"
                    className="h19"
                    // text={$data?.description || "--"}
                    text={
                      workshopLocations[$data?.location] === "in_person"
                        ? $data?.description
                        : _getMeetingPlatformName($data?.meeting_link)
                    }
                  />
                  <Typography
                    as="h5"
                    className="p8"
                    text={`${
                      workshopLocations[$data?.location] === "in_person"
                        ? "Physical"
                        : "Online"
                    }`}
                  />
                </div>
              </Flex>
              <Link to={handleDirection()} target="_blank">
                <PrimaryButton onClick={() => {}} className="w-full size-2">
                  Get Direction
                </PrimaryButton>
              </Link>
            </div>
          </AddressCard>
          <Typography
            as="h4"
            className="h20 mt-40 mb-15"
            text="Workshop Overview"
          />
          <Typography as="p" className="p7 ">
            {$data?.course_overview || "--"}
          </Typography>

          <IconButton className="link-icon-cta mt-30 text-uppercase w-full">
            Get More Detail
            <Link2Icon width={15} height={15} />
          </IconButton>
        </div>
      </WorkshopDetailsModalStyle>
    </Modal>
  );
};

export default WorkshopDetailsModal;
