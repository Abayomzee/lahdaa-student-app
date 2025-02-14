/** @format */

import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import { appRoutes } from "utils/constants";
import { Register } from "components/pages/Register";
import useAppStore from "store/app.store";
import { useApi, useToast } from "utils/hooks";
import endpoints from "services/endpoints";
import { Verify } from "components/pages/Verify";
import { Login } from "components/pages/Login";
import { Session } from "components/pages/Session";
import { Workshop } from "components/pages/Workshop";
import { ProtectedRoute } from "components/atom/ProtectedRoute";
import { MyLearning } from "components/pages/MyLearning";

interface Props {}
const AppRouter: React.FC<Props> = () => {
  // Hooks
  const { errorToast } = useToast();

  // Store
  const { countries, setCountries } = useAppStore();

  // Api
  const countriesApi = useApi<{ countries?: any[]; message?: string }>();

  // Methods
  const getCountries = async () => {
    const res = await countriesApi.sendRequest(
      "GET",
      endpoints.getCountriesUrl
    );

    if (countriesApi.error) {
      errorToast(countriesApi.error);
      return;
    }

    setCountries(res?.countries);
  };

  // Effects
  useEffect(() => {
    if (!countries?.length) getCountries();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Router level
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default AppRouter;

interface AnimatedProps {}
const AnimatedRoutes: React.FC<AnimatedProps> = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={appRoutes.REGISTER} element={<Register />} />
        <Route path={appRoutes.LOGIN} element={<Login />} />
        <Route
          path={appRoutes.VERIFY}
          element={
            <ProtectedRoute>
              <Verify />
            </ProtectedRoute>
          }
        />
        <Route
          path={appRoutes.WORKSHOP}
          element={
            <ProtectedRoute>
              <Workshop />
            </ProtectedRoute>
          }
        />
        <Route
          path={appRoutes.SESSION}
          element={
            <ProtectedRoute>
              <Session />
            </ProtectedRoute>
          }
        />
        <Route
          path={appRoutes.LEARNING}
          element={
            <ProtectedRoute>
              <MyLearning />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

/**
 *  <Route
            path={appRoutes.WORKSHOP}
            element={
              <ProtectedRoute>
                <Workshop />
              </ProtectedRoute>
            }
          />
          <Route
            path={appRoutes.SESSION}
            element={
              <ProtectedRoute>
                <Session />
              </ProtectedRoute>
            }
          />
 */
