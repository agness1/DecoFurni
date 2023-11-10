import React, { FC } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useSelector } from "react-redux";
import { selectCartData } from "../../store/shopingCart-slice";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
} from "../../store/shopingCart-slice";
import Order from "./order";
import Link from "next/link";

const Cart: FC = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(selectCartData);
  const data = cartData
  return (
    <div className="relative">
      <div className="w-1/2 h-fit pb-4  shadow-2xl absolute top-20 left-20">
        <div className="flex p-2 pl-4 items-center">
          <Link href={"/"}>
            <ArrowBackIosIcon className="text-xl" />
          </Link>
          <p>Shoping Continue</p>
        </div>
        <hr></hr>
        <p className="pl-4 py-4">Shoping Cart</p>

        {cartData.map((product: any, index: any) => (
          <div className="flex justify-center" key={index}>
            <div className="flex w-9/12 justify-between shadow-xl rounded-md items-center p-4">
              <img src={product.img} className="w-20"></img>
              <p>{product.name}</p>
              <div className="flex items-center gap-1">
                <span>{product.quantity}</span>
                <div className="flex flex-col">
                  <ArrowDropUpIcon
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(increaseQuantity(product.id));
                    }}
                  />
                  <ArrowDropDownIcon
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(decreaseQuantity(product.id));
                    }}
                  />
                </div>
              </div>
              <p>{`${product.price * product.quantity}`} $</p>
              <DeleteForeverIcon
                className="cursor-pointer"
                onClick={() => {
                  dispatch(removeProduct(index));
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <Order data={data} />
    </div>
  );
};

export default Cart;
