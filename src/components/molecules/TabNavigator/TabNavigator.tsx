/** @format */

import React, { useEffect, useState } from "react";
import { TabNav, Wrapper } from "./style";
import { useNavigate, useParams } from "react-router";

// Type defination
interface Props {
  $tabs?: any[];
  $activeTab?: any;
}

// Component
const TabNavigator: React.FC<Props> = (props) => {
  // State
  const [, setActive] = useState(0);

  // Hook
  const navigate = useNavigate();
  let { tab } = useParams();

  //   Props
  const { $tabs } = props;

  // Method
  const handleTabToggle = (tab: any, i: any) => {
    setActive(i);
    navigate(tab?.path);
  };

  // Effect
  useEffect(() => {}, []); // Implement on route change with URL query parameters

  // Data to display
  return (
    <Wrapper>
      {$tabs?.map((t, i) => (
        <TabNav
          key={i}
          className={t.name === tab ? "active" : ""}
          onClick={() => {
            handleTabToggle(tab, i);
            navigate(`/student/learning/${t.slug}`);
          }}
        >
          {t.label}
        </TabNav>
      ))}
    </Wrapper>
  );
};

export default TabNavigator;
