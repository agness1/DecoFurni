import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../products/productsPage.tsx/ProductItem";

const WishLists: FC = () => {
    const addedProductsData =       useSelector((state: any) => state.wishLists)
  const  addedProducts = addedProductsData
    console.log(addedProducts)


    const wishList = () => {

        if(addedProducts.length >= 1) {
          return (
      
              addedProducts.map((product: any, index: any) => (
              <div key={index} className="flex gap-12 flex-wrap justify-center h-fit">
                  <ProductItem key={product.id} product={product}/>
              </div>
          ))
          )
          
      } else return (
        <div className="flex items-center">
            <h1 className="font-bold text-2xl">Your wish list is empty!</h1>
        </div>
          
      )
        
      }

return (
    <div className=" pt-20 px-8 h-screen overflow-scroll w-full flex justify-center flex-wrap gap-4">
    {wishList()}
    </div>
)
}
export default WishLists

