import React from "react";
import { IconButtonWrapper } from "./style";
import { ButtonProps } from "./types";

// Component
const IconButton: React.FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  // Data to display
  return <IconButtonWrapper {...otherProps}>{children}</IconButtonWrapper>;
};

export default IconButton;
