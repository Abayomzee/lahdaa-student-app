/** @format */

import React from "react";
import { DarkWrapper, TabNavDark } from "./style";
import { useNavigate, useParams } from "react-router";

// Type defination
interface Props {
  $navs: any[];
  $url: string;
}

// Component
const TabNavigatorDark: React.FC<Props> = (props) => {
  // Hook
  const navigate = useNavigate();
  let { tab2 } = useParams();

  // Props
  const { $navs, $url } = props;

  //   Methods

  // Data to display
  return (
    <DarkWrapper>
      {$navs.map((tab, i) => (
        <TabNavDark
          key={i}
          // className={active === i ? "active" : ""}
          className={tab.name === tab2 ? "active" : ""}
          onClick={() => {
            navigate(`${$url}/${tab.slug}`);
          }}
        >
          {tab.label}
        </TabNavDark>
      ))}
    </DarkWrapper>
  );
};

export default TabNavigatorDark;
