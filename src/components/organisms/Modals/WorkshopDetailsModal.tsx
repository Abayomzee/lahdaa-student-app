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

// Component
const WorkshopDetailsModal: React.FC<ModalsProps> = (props) => {
  // Props
  const { handleClose, $data } = props;

  console.log({ $data });

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
            Starting in - 03days : 18hrs : 45mins
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
                <Typography as="h5" className="h16 text-center" text="JUN" />
              </div>
              <div className="DetailsDate__body">
                <Typography as="h5" className="h17 text-center" text="9" />
              </div>
            </DetailsDate>
            <div className="ml-10">
              <Typography as="h5" className="h18" text="Monday, June 9" />
              <Typography as="p8" className="p8" text="2:00 PM - 4:00 PM UTC" />
            </div>
            <Flex className="ml-30" $gap=".4rem" $flexRowAiCenter>
              <MapPinIcon />

              <Flex $gap=".4rem" $flexRowAiCenter>
                <Typography as="h5" className="h19" text="Where:" />
                <Typography as="h5" className="p8" text="London" />
              </Flex>
            </Flex>
          </DetailsTimeNLocation>

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
                    text="32 Caledonian Rd, LN2 5EA"
                  />
                  <Typography as="h5" className="p8" text="London, England" />
                </div>
              </Flex>
              <PrimaryButton onClick={() => {}} className="w-full size-2">
                Get Direction
              </PrimaryButton>
            </div>
          </AddressCard>

          <Typography
            as="h4"
            className="h20 mt-40 mb-15"
            text="Workshop Overview"
          />
          <Typography as="p" className="p7 ">
            Entrepreneurs, business managers, and aspiring entrepreneurs can
            uncover the mysteries of customer behaviour and preferences through
            a comprehensive 4-week course that imparts crucial skills for
            understanding, connecting with, and serving customers effectively.
            Blending interactive lessons, real-world case studies, and practical
            exercises, the course enables participants to gain an in-depth
            understanding of their target audience.
          </Typography>
          <Typography as="p" className="p7 mt-15">
            Armed with these insights, they can tailor their products, services,
            and marketing strategies to maximally resonate with customers and
            drive impact. By journeying through this course, business leaders
            will be equipped to decipher customer needs and tailor their
            business offerings and outreach. accordingly.
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
