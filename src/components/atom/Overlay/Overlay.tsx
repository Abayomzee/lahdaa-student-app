import React from "react";
import { OverlayStyle } from "./style";

interface Props {
  children?: JSX.Element;
}
const Overlay: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <OverlayStyle
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      {...props}
      id="sdf"
    >
      {children}
    </OverlayStyle>
  );
};

export default Overlay;
