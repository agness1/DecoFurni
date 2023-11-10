import React, { FC } from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { selectCartData } from "../../store/shopingCart-slice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useState, useEffect } from "react";
import CartModal from "../layout/cartModal";
import { db } from "@/firebase";
import { ref, push } from "firebase/database";
interface Data {
  data: any
}

const Order: FC<Data> = (props) => {


const date = new Date();

let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let fullDate = `${day}-${month}-${year}`





  const database = db
  const userID = auth.currentUser?.uid;
  console.log(userID)
  const[isLogin, setIsLogin] = useState(false)
  const userData = props.data



const userDataPurchases = userData.map((item: any) => ({
  ...item,
  fullDate: fullDate
}))
  
console.log(userDataPurchases)
  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
    if (user) {
     console.log('zalogowany')
     setIsLogin(true)
    } else {
     console.log('wylogowany')
     setIsLogin(false)
    }
  });
  }, [])
  
/*const modal = () => {
  {isLogin ? <><CartModal><p  ></p></CartModal></> : <CartModal></CartModal>}
}*/

  const cartData = useSelector(selectCartData);
  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((product: any) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const savePurchaseToDatabase = (purchaseData: any, userID: any) => {
    const userPurchaseRef = ref(database, `users/${userID}/purchases`);
    push(userPurchaseRef, purchaseData)
      .then(() => {
        console.log('Dane o zakupie zostały pomyślnie zapisane w bazie danych.');
      })
      .catch((error: any) => {
        console.error('Wystąpił błąd podczas zapisywania danych:', error);
      });
  };


  return (
    <div className=" flex flex-col justify-between w-1/4 gap-8  bg-opal shadow-2xl md:absolute md:top-24 md:right-36 rounded-md p-10">
      <p className="text-white">Card type</p>
      <div className="flex justify-evenly">
        <img src={"/images/masterCard.png"}/>
        <img src={"/images/visa.png"}></img>
        <img src={"/images/runPay.png"}></img>
      </div>
      <form className="flex flex-col  text-white gap-4">
        <label>Name on Card</label>
        <input type="text" placeholder="Name" required></input>
        <label>Card Number</label>
        <input type="number" required placeholder="111 2222 6645 4444"></input>
        <div className="flex">
          <div>
            <label>Expiration date</label>
            <input type="date" required></input>
          </div>

          <div>
            <label className="uppercase">Cvv</label>
            <input required className="w-36" type="number" placeholder="123"></input>
          </div>
        </div>
      </form>
      <hr></hr>
      <div className="flex justify-between">
        <p className="text-white">Total</p>
        <p className="text-white">${calculateTotal()}</p>
      </div>
      <Button
      onClick={() => savePurchaseToDatabase(userDataPurchases, userID)}
        type="submit"
        className="flex  justify-between  bg-green hover:bg-black text-white p-4"
      >
        <p>${calculateTotal()}</p>
        <p>Checkout</p>
      </Button>
    </div>
  );
};
export default Order;
