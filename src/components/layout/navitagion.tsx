import React, { FC } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import MainNavigation from "./hamburger";
import Login from "./login";
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { selectCartData } from "../../store/shopingCart-slice";
import { useSelector } from "react-redux";

const Navigation: FC = ({}) => {

  const cartData = useSelector(selectCartData);
  console.log(cartData)

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid `,
      padding: '0 4px',
    },
  }));

  return (
    <>
      <nav className="hidden justify-between px-20 sm:flex h-12 items-center bg-transparent relative md:absolute w-full pt-4">
        <div className="flex gap-14 items-center">
          <p className="font-bold text-2xl pr-10 ">
            <Link href={"/"}>DecoFurni</Link>
          </p>
          <div className="flex items-center">
            <Link href={"/products"} className="text-2xl">
                Products
            </Link>
          </div>
          <Link href="/contact" className="text-2xl">
            Contact
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <Link href="/wishListsPage">
            <FavoriteIcon />
          </Link>
          <Link href="/shopingCart">
          <StyledBadge badgeContent={cartData.map((item: any) => item.quantity)} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
          </Link>
          <Login />
        </div>
      </nav>
      <MainNavigation />
    </>
  );
};
export default Navigation;
