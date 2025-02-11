import React from "react";
import { PrimaryButtonWrapper } from "./style";
import { ButtonProps } from "./types";

// Component
const PrimaryButton: React.FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  // Data to display
  return (
    <PrimaryButtonWrapper {...otherProps}>{children}</PrimaryButtonWrapper>
  );
};

export default PrimaryButton;
