import React, { useState } from "react";
import { DarkWrapper, TabNavDark } from "./style";

// Type defination
interface Props {
  $navs: any[]
}

// Component
const TabNavigatorDark: React.FC<Props> = (props) => {
  // State
  const [active, setActive] = useState(0);

  // Props
  const { $navs } = props;

  //   Methods

  // Data to display
  return (
    <DarkWrapper>
      {$navs.map((tab, i) => (
        <TabNavDark
          className={active === i ? "active" : ""}
          onClick={() => setActive(i)}
        >
          {tab}
        </TabNavDark>
      ))}
    </DarkWrapper>
  );
};

export default TabNavigatorDark;
