import React, { FC, useEffect, useState } from "react";
import ProductItem from "../products/productsPage.tsx/ProductItem";
import { auth } from "@/firebase";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";
import useSetLogin from "@/hooks/useSetLogin";
import { useRouter } from "next/router";

const WishLists: FC = () => {
  const [product, setProducts] = useState({});
  const { isLogin } = useSetLogin();
  const router = useRouter();
  
  const userID = auth.currentUser?.uid;
  const userWishListRef = ref(db, `users/${userID}/wishList`);
  useEffect(() => {
    if (isLogin) {
      onValue(userWishListRef, (snapshot) => {
        const wishListData = snapshot.val();
        setProducts(wishListData);
      });
    }
  }, [isLogin]);

  const addedProducts = Object.values(product || {});
  const wishList = () => {
    if (addedProducts.length >= 1) {
      return Object.values(product).map((product: any, index: any) => (
        <div key={index} className="flex gap-12 flex-wrap justify-center h-fit">
          <ProductItem key={product.id} product={product} />
        </div>
      ));
    } else
      return (
        <div className="flex items-center">
          <h1 className="font-bold text-2xl">Your wish list is empty!</h1>
        </div>
      );
  };

  return (
    <div className=" pt-20 px-8 h-screen overflow-scroll w-full flex justify-center flex-wrap gap-4">
      {wishList()}
    </div>
  );
};
export default WishLists;
