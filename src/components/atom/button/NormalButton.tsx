import React from "react";
import { Button } from "./style";
import { ButtonProps } from "./types";

// Component
const NormalButton: React.FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  // Data to display
  return <Button {...otherProps}>{children}</Button>;
};

export default NormalButton;
