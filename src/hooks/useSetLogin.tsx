import { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const useSetLogin = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return { isLogin };
};
export default useSetLogin;
