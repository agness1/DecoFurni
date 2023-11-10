import React, { FC } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { signOut } from "firebase/auth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useSetLogin from "@/hooks/useSetLogin";
const Login: FC = () => {

const {isLogin} = useSetLogin()

console.log(isLogin)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //const [currentUres, setCurrentUser] = useState(localStorage.getItem('auth'))
 // const [isLogin, setIsLogin] = useState(false);

  /*useEffect(() => {
const currentUser = localStorage.getItem('auth')
setCurrentUser(currentUser)
}, [])*/

  //

 /* useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("zalogowany");
        setIsLogin(true);
      } else {
        console.log("wylogowany");
        setIsLogin(false);
      }
    });
  }, []);*/
 // console.log(isLogin);

  const login = () => {
    return (
      <Link href={"/signInPage"}>
        <MenuItem className="" onClick={handleClose}>
          Login
        </MenuItem>
      </Link>
    );
  };
  const logout = () => {
    return (
      <>
        <MenuItem
          onClick={() => {
            handleClose;
            signOut(auth);
          }}
        >
          Logout
        </MenuItem>
        <Link href={"/user"}><MenuItem onClick={handleClose}>My account</MenuItem></Link>
        
      </>
    );
  };

  return (
    <>
      <div>
        <Button
          className="bg-opal text-white  hover:bg-black p-2 px-8 text-sm capitalize"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {isLogin ? logout() : login()}
        </Menu>
      </div>
    </>
  );
};

export default Login;
