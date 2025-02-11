import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AuthStoreProps } from "./types";

const useAuthStore = create<AuthStoreProps>()(
  persist(
    immer(
      devtools((set) => ({
        userData: {},
        updatedUserData: {},

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
        userLogOut: () => {
          set({ userData: {}, updatedUserData: {} });
        },
      }))
    ),
    {
      name: "fdtrk_auth_str",
    }
  )
);
export default useAuthStore;
