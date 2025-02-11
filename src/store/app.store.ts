import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { AppStoreProps } from "./types";

const useAppStore = create<AppStoreProps>()(
  persist(
    immer(
      devtools((set) => ({
        // Data
        countries: [],

        // Methods
        setCountries: (countries: any[]) => {
          set({countries})
        },
      }))
    ),
    {
      name: "lahdaa_app_str",
    }
  )
);
export default useAppStore;
