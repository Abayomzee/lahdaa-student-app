import React, { useState } from "react";
import { TabNav, Wrapper } from "./style";

// Type defination
interface Props {}

// Component
const TabNavigator: React.FC<Props> = () => {
  // State
  const [active, setActive] = useState(0);

  //   Methods

  // Data to display
  return (
    <Wrapper>
      {["Workshops", "1-on-1 Session", "On- Demand Course "].map((tab, i) => (
        <TabNav
          className={active === i ? "active" : ""}
          onClick={() => setActive(i)}
        >
          {tab}
        </TabNav>
      ))}
    </Wrapper>
  );
};

export default TabNavigator;
