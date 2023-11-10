import React, { FC } from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import MainNavigation from "./hamburger";
import Login from "./login";

const Navigation: FC = ({}) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <nav className="hidden justify-between px-20 sm:flex h-12 items-center bg-transparent relative md:absolute w-full pt-4">
        <div className="flex gap-14 items-center">
          <p className="font-bold text-2xl pr-10">
            <Link href={"/"}>DecoFurni</Link>
          </p>
          <div className="flex items-center">
            
          <Link href={"/products"}>
              
              <Button
              id="basic-button"
              sx={{
                color: "black",
                padding: "0",
                textTransform: "none",
                fontSize: "1.25rem",
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              
              Products
            </Button>
              
               </Link>
          </div>
          <Link href="" className="text-xl">
           
            Contact
          </Link>
        </div>

        <div className="flex gap-10 items-center">
          <Link href="/wishListsPage">
          
            <FavoriteIcon />
          </Link>
          <Link href="/shopingCart">
            <ShoppingCartIcon />
          </Link>
          <Login/>
        </div>
      </nav>
      <MainNavigation />
    </>
  );
};
export default Navigation;
