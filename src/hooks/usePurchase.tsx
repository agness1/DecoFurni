import React, {useEffect, useState} from "react";
import { auth } from "@/firebase";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";
import { useDispatch } from "react-redux";
import { setUserPurchase } from "@/store/purchaseSlice";

const usePurchase = () => {
  const [product, setProducts] = useState()

 const dispatch = useDispatch();
    
  useEffect (() => {
    
    const userID = auth.currentUser?.uid;
      const userPurchaseRef = ref(db, `users/${userID}/purchases`);
      onValue(
        userPurchaseRef,
        (snapshot) => {
          const purchaseData = snapshot.val();
          setProducts(purchaseData)
          console.log(purchaseData)
        },
        
      );
    }, [] ) 

    return {product}
}
export default usePurchase