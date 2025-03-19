/** @format */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

// Type defination
interface TabsProps {
  label: string;
  slug: string;
  component: JSX.Element;
}

interface ReturnData {
  activeTab: any;
  tabLevel2Name: any;
}

// Component
const useTabs = (
  tabs: TabsProps[],
  tabBaseUrl: string,
  tabLevel: number
): ReturnData => {
  // States
  const [activeTab, setTab] = useState<any>();

  // Hooks
  let { tab, tab2 } = useParams();
  let navigate = useNavigate();

  //   Data
  //   const tabToCheck = tabLevel === 1 ? `${tab}/${tab2}` : tab2;
  const tabToCheck = `${tab}/${tab2}`;

  // Effects
  useEffect(() => {
    const index = tabs.findIndex((t) => t.slug === tabToCheck);

    console.log({ tabToCheck, index, tab2, tabLevel });

    if (index >= 0) {
      setTab(tabs[index]);
    } else {
      setTab(tabs[0]);
      navigate(`${tabBaseUrl}/${tabs[0].slug}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, tab2]);

  return { activeTab, tabLevel2Name: tab2 };
};
export default useTabs;
