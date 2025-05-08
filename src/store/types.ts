
export interface AppStoreProps {
  // Data
  userData: any;
  countries: any[];
  updatedUserData: any;

  // Methods
  userLogOut: () => void;
  userLogIn: (data: object) => void;
  setUserData: (data: object) => void;
  setCountries: (data: object) => void;
}

export interface AuthStoreProps {
  // Data
  userData: any;
  updatedUserData: any;
  gapiUserData: any;
  // ========
  registeringUserEmail?: string;

  // Methods
  userLogOut: () => void;
  userLogIn: (data: object) => void;
  setUserData: (data: object) => void;
  updateUserData: (data: object) => void;
  setGapiUserData: (data: object) => void;
  // =========
  setRegisteringUserEmail: (email: string) => void;
}