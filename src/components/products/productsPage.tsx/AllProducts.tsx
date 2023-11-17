import React, { FC } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/fetch-slice";
import { AppDispatch, RootState } from "@/store/store";
import ProductItem from "./ProductItem";

const AllProducts: FC = () => {
  const productRef = useRef(false);
  const { entities } = useSelector((state: RootState) => state.products);
  const color = useSelector((state: any) => state.color.value);
  const price = useSelector((state: any) => state.price.value);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (productRef.current === false) {
      dispatch(fetchProducts());
    }
    return () => {
      productRef.current = true;
    };
  }, [dispatch]);
  const allDataProducts = Array.from(Object.values(entities));

  return (
    <div className="h-screen overflow-scroll w-full flex justify-center flex-wrap gap-4">
      <hr className="w-full"></hr>
      {allDataProducts.map((productGroup: any, index) => (
        <div
          key={index}
          className="flex gap-12 my-10 flex-wrap justify-center h-fit"
        >
          {Object.keys(productGroup).map((productId) => {
            const product = productGroup[productId];
            if (
              (product.color == color || color == "allColors") &&
              product.price > price[0] &&
              product.price <= price[1]
            ) {
              return <ProductItem key={product.id} product={product} />;
            }
          })}
        </div>
      ))}
    </div>
  );
};
export default AllProducts;
