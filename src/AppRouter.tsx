/** @format */

import React, { useEffect, useTransition } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import { appRoutes } from "utils/constants";
import { Register } from "components/pages/Register";
import useAppStore from "store/app.store";
import { useApi, useToast } from "utils/hooks";
import endpoints from "services/endpoints";

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
    /**
     * {
    "country_id": "1",
    "country_name": "Afghanistan",
    "iso3": "AFG",
    "country_code": "004",
    "iso2": "AF",
    "phonecode": "93",
    "capital": "Kabul",
    "currency": "AFN",
    "currency_symbol": "؋",
    "tld": ".af",
    "native": "افغانستان",
    "region": "Asia",
    "subregion": "Southern Asia",
    "timezones": "[{\"zoneName\":\"Asia/Kabul\",\"gmtOffset\":16200,\"gmtOffsetName\":\"UTC+04:30\",\"abbreviation\":\"AFT\",\"tzName\":\"Afghanistan Time\"}]",
    "translations": "{\"kr\":\"아프가니스탄\",\"br\":\"Afeganistão\",\"pt\":\"Afeganistão\",\"nl\":\"Afghanistan\",\"hr\":\"Afganistan\",\"fa\":\"افغانستان\",\"de\":\"Afghanistan\",\"es\":\"Afganistán\",\"fr\":\"Afghanistan\",\"ja\":\"アフガニスタン\",\"it\":\"Afghanistan\",\"cn\":\"阿富汗\"}",
    "latitude": "33.00000000",
    "longitude": "65.00000000",
    "emoji": "🇦🇫",
    "emojiU": "U+1F1E6 U+1F1EB",
    "created_at": "2018-07-20 13:11:03",
    "updated_at": "2021-08-01 07:37:27",
    "flag": "1",
    "wikiDataId": "Q889"
}
     */
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
      </Routes>
    </AnimatePresence>
  );
};
