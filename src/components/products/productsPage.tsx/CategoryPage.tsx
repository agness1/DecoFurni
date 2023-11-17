import React, { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/fetch-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";
import ProductItem from "./ProductItem";
import LoadingPage from "./LoadingPage";

const CategoryPage: FC = () => {
  const features = useSelector((state: any) => state.feature.value);
  const router = useRouter();
  const path = router.query.category;
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

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="h-screen overflow-scroll w-full flex justify-center flex-wrap gap-4">
      <hr className="w-full"></hr>
      {showLoading ? (
        <LoadingPage />
      ) : (
        allDataProducts.map((productGroup: any, index) => (
          <div
            key={index}
            className="flex gap-12 my-5 flex-wrap justify-center h-fit "
          >
            {Object.keys(productGroup).map((productId) => {
              const product = productGroup[productId];
              if (
                product.category == path &&
                product.feature == features &&
                (product.color == color || color == "allColors") &&
                product.price > price[0] &&
                product.price <= price[1]
              ) {
                return <ProductItem key={product.id} product={product} />;
              } else if (
                features == "default" &&
                product.category == path &&
                (product.color == color || color == "allColors") &&
                product.price > price[0] &&
                product.price <= price[1]
              ) {
                return <ProductItem key={product.id} product={product} />;
              }
            })}
          </div>
        ))
      )}
    </div>
  );
};
export default CategoryPage;
