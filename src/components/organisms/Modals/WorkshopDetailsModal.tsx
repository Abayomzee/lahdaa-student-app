/** @format */

import React, { useEffect } from "react";
import { Modal } from "components/molecules/Modal";
import { ModalsProps } from "./types";
import { WorkshopDetailsModalStyle } from "./style";
import { CloseModalIcon } from "components/atom/SvgIcon";
import Typography from "components/atom/Typography";
import { NormalButton } from "components/atom/button";

// Component
const WorkshopDetailsModal: React.FC<ModalsProps> = (props) => {
  // Props
  const { handleClose } = props;

  // Effects
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to display
  return (
    <Modal modalWidth="50rem" className="no-padding">
      <WorkshopDetailsModalStyle>
        <div className="top">
          <Typography as="h5" className="h14" text={"Workshop"} />

          <NormalButton onClick={handleClose}>
            <CloseModalIcon />
          </NormalButton>
        </div>
      </WorkshopDetailsModalStyle>
    </Modal>
  );
};

export default WorkshopDetailsModal;
