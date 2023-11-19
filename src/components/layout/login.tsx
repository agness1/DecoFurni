import React, { FC } from "react";
import { auth } from "@/firebase";
import Link from "next/link";
import { signOut } from "firebase/auth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useSetLogin from "@/hooks/useSetLogin";
const Login: FC = () => {
  const { isLogin } = useSetLogin();

  console.log(isLogin);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const login = () => {
    return (
      <Link href={"/signInPage"}>
        <MenuItem onClick={handleClose}>Login</MenuItem>
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
        <Link href={"/user"}>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Link>
      </>
    );
  };

  return (
    <>
      <div className="p-4">
        <button
          className="md:bg-opal bg-black text-white  hover:bg-black p-2 px-8 text-sm capitalize rounded-md"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon />
        </button>
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
