import { useEffect, useState } from "react";
import { useAuthStore } from "store";
import { checkTokenExpiration } from "utils/helper";

// Component
const useSession = () => {
  const [active, setActive] = useState<boolean>(false);

  // Store
  const { userData, userLogOut } = useAuthStore();

  useEffect(() => {
    setActive(checkTokenExpiration(userData?.token));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!checkTokenExpiration(userData?.token)) userLogOut();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return { isTokenValid: active };
};

export default useSession;
