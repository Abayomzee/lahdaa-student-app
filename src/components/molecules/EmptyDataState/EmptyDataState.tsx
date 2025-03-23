/** @format */

import React, { AllHTMLAttributes } from "react";
import { Wrapper } from "./style";
import { EmptyDataIcon } from "components/atom/SvgIcon";
import Typography from "components/atom/Typography";

// Type defination
interface Props extends AllHTMLAttributes<HTMLDivElement> {
  $label?: string;
  $subLabel?: string;
}

// Component
const EmptyDataState: React.FC<Props> = (props) => {
  // Props
  const { $label, $subLabel } = props;

  // Data to display
  return (
    <Wrapper {...props}>
      <EmptyDataIcon className="mb-30 w-full" />
      {$label && (
        <Typography as="h4" className="h1 text-center" text={$label} />
      )}
      {$subLabel && (
        <Typography as="p" className="p1 text-center" text={$subLabel} />
      )}
    </Wrapper>
  );
};

export default EmptyDataState;
