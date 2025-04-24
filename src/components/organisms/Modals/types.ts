import { AllHTMLAttributes } from "react";

export interface ModalsProps extends AllHTMLAttributes<HTMLDivElement> {
  handleClose?: () => void;
  handleYesAction?: () => void;
  handleAfterApiCall?: () => void;
  handleFormSuccess?: () => void;

  id?: string;
  $data?: any;
  loading?: boolean;
}

export interface WorkshopLocationsProps  { in_person: "in_person"; online: "online"; }
