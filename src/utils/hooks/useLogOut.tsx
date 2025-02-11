import { useNavigate } from "react-router";
import { useAuthStore } from "store";
import { appRoutes } from "utils/constants";

const useLogOut = () => {
  // Hooks
  const nagivate = useNavigate();

  // Store
  const { userLogOut } = useAuthStore();

  //   Method
  const logout = () => {
    userLogOut();
    nagivate(appRoutes.LOGIN);
  };

  return { logout };
};

export default useLogOut;
