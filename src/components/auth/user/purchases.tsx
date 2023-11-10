import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import usePurchase from "@/hooks/usePurchase";
const Purchases: FC = () => {


  const { product} = usePurchase()

 

  


console.log(product)
  
  const purchaseData = useSelector((state: any) => state.purchase.value);
  console.log(purchaseData);

  return (
    <div className="p-2">
      {product ? (
        Object.values(product).map((itemArray: any, index: any) => (
          <div key={index} className="w-full flex flex-wrap justify-center">
            {itemArray.map((product: any) => (
              <div
                key={product.id}
                className="flex w-full justify-between shadow-xl rounded-md items-center p-4"
              >
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Date: {product.fullDate}</p>
                <img src={product.img} alt={product.name} className="w-20" />
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No purchase data available</p>
      )}
    </div>
  );
};
export default Purchases;
