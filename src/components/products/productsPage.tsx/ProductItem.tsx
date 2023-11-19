import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
}
const ProductItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <div
      key={product.id}
      className="border-2 p-8 shadow-xl md:hover:scale-110 transition  "
    >
      <Link
        className=""
        href={{
          pathname: `/products/${product.id}`,
          query: { id: `${product.id}` },
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <img src={product.img} className="w-72 rounded-md h-44"></img>
          <h2 className="text-xl pt-4">{product.name}</h2>
          <p className=" text-lg p-4">{product.price}$</p>
          <button
            className="bg-opal p-2 text-white rounded-md hover:bg-black"
          >
            See more
          </button>
        </div>
      </Link>
    </div>
  );
};
export default ProductItem;
