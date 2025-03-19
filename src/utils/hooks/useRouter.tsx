/** @format */

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { appRoutes } from "utils/constants";

// Type defination

// Component
const useRouter = (routes: any) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* <Route path={appRoutes.SESSION} element={""} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default useRouter;
