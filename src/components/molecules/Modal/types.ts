import React, { AllHTMLAttributes } from "react";

export interface ModalProps extends AllHTMLAttributes<HTMLDivElement> {
  handleClose?: () => void;
  handleYesAction?: () => void;

  isLoadingAction?: boolean;

  primaryBtnLabel?: string;
  primaryBtnLoading?: boolean;

  secondaryBtnLabel?: string | React.JSX.Element;
  secondaryBtnLoading?: boolean;

  modalWidth?: string;
  hideFooter?: boolean;
}
