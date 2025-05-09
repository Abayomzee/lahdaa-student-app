/** @format */

import { create } from "zustand";
import { devtools, persist ,createJSONStorage} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AuthStoreProps } from "./types";

const useAuthStore = create<AuthStoreProps>()(
  persist(
    immer(
      devtools((set) => ({
        userData: {},
        updatedUserData: {},
        gapiUserData: {},
        // ========
        registeringUserEmail: "",

        // Methods
        userLogIn: (data: any) => {
          set({ userData: data }, false, "auth_user_login");
        },
        setUserData: (updatedUserData: any) => {
          set({ updatedUserData }, false, "auth_user_login");
        },
        updateUserData: (updatedUserData: any) => {
          set(
            (userData) => ({ ...userData, ...updatedUserData }),
            false,
            "auth_user_data_update"
          );
        },
          setGapiUserData: (gapiUserData: any) => {
          set({ gapiUserData }, false, "auth_user_g_login");
        },
        userLogOut: () => {
          set({ userData: {}, updatedUserData: {} });
        },
        // ===========
        setRegisteringUserEmail: (registeringUserEmail) =>
          set({ registeringUserEmail }),
      }))
    ),
    {
      name: "fdtrk_auth_str",
       storage: createJSONStorage(() => localStorage)
    }
  )
);
export default useAuthStore;
