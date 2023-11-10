import { useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged} from "firebase/auth";
import { isLogIn, isLogOut } from "@/store/authSlice";

const useSetLogin = () => {
    const[isLogin, setIsLogin] = useState(false)

    useEffect (() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
         console.log('zalogowany')
         setIsLogin(true)
        } else {
         console.log('wylogowany')
         setIsLogin(false)
        }
      });
      
   
    },[])

return {isLogin}





    /*const login = () => {
localStorage.removeItem(`auth`)
localStorage.setItem(`auth`, "user is log in")
}

const logout = () => {
    localStorage.removeItem(`auth`)
    localStorage.setItem(`auth`, "user is log out")
}

   return {login, logout}*/
   

}
export default useSetLogin