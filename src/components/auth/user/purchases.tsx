import React, { FC, useEffect, useState } from "react";
import { auth } from "@/firebase";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";
import useSetLogin from "@/hooks/useSetLogin";

const Purchases: FC = () => {
  const [product, setProducts] = useState({});
  const { isLogin } = useSetLogin();

  const userID = auth.currentUser?.uid;
  const userWishListRef = ref(db, `users/${userID}/purchases`);
  useEffect(() => {
    if (isLogin) {
      onValue(userWishListRef, (snapshot) => {
        const wishListData = snapshot.val();
        setProducts(wishListData);
      });
    }
  }, [isLogin]);

  return (
    <div className="p-2 w-full">
      {product ? (
        Object.values(product).map((itemArray: any, index: any) => (
          <div key={index} className="w-11/12 flex flex-wrap justify-center  m-auto">
            {itemArray.map((product: any) => (
              <div
                key={product.id}
                className="flex flex-col m-4 md:flex-row gap-8 md:gap-0 w-full justify-between shadow-xl  rounded-md items-center p-4 md:h-20"
              >
                <h1 className="font-bold">{product.name}</h1>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Date: {product.fullDate}</p>
                <img src={product.img} alt={product.name} className="w-20" />
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-center">No purchase data available</p>
      )}
    </div>
  );
};
export default Purchases;
