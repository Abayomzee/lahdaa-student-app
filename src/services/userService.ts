import http from "./httpService";

// Constant
// const userDataKey = process.env.REACT_APP_USER_KEY || "";
const registerUserApi = "/auth/register";

export function register(userData: any) {
  return http.post(registerUserApi, userData);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  register,
};
