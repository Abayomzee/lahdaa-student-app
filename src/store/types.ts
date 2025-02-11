
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
  userData: any;
  updatedUserData: any;
  userLogIn: (data: object) => void;
  setUserData: (data: object) => void;
  updateUserData: (data: object) => void;
  userLogOut: () => void;
}