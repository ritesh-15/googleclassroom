import { useEffect, useState } from "react";
import { refresh } from "../api/auth/login.api";
import UserHelper from "../helpers/user/UserHelper";

const useRefresh = () => {
  const [loading, setLoading] = useState(true);
  const { changeUser } = UserHelper();

  useEffect(() => {
    (async () => {
      try {
        const { data } = <any>await refresh();
        setLoading(false);
        changeUser(data.user);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, []);

  return loading;
};

export default useRefresh;
