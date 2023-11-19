import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectCartData } from "../../store/shopingCart-slice";
import { auth } from "@/firebase";
import { db } from "@/firebase";
import { ref, push } from "firebase/database";
import useSetLogin from "@/hooks/useSetLogin";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, SubmitHandler } from "react-hook-form";
interface Data {
  data: any;
}
interface Input {
  name: string;
  cardNumber: number;
  date: string;
  cvv: number;
}

const Order: FC<Data> = (props) => {
  const { isLogin } = useSetLogin();
  const router = useRouter();
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = `${day}-${month}-${year}`;

  const database = db;
  const userID = auth.currentUser?.uid;

  const userData = props.data;

  const userDataPurchases = userData.map((item: any) => ({
    ...item,
    fullDate: fullDate,
  }));

  const notify = () => toast("Shoping cart is empty!");
  const notifySuccess = () => toast("Successful purchase!");

  const cartData = useSelector(selectCartData);
  const calculateTotal = () => {
    let total = 0;
    cartData.forEach((product: any) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
  const handleError = (errors: any) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    cardNumber: {
      required: "Card Number is required",
      maxLength: {
        value: 16,
        message: "Card number must have 16 characters",
      },
      minLength: {
        value: 16,
        message: "Card number must have 16 characters",
      },
    },
    date: { required: "Date is required " },
    cvv: {
      required: "Cvv is required ",
      maxLength: {
        value: 3,
        message: "CVV must have 3 characters",
      },
    },
  };

  const savePurchaseToDatabase = (purchaseData: any, userID: any) => {
    if (isLogin && userDataPurchases.length > 0) {
      const userPurchaseRef = ref(database, `users/${userID}/purchases`);
      push(userPurchaseRef, purchaseData)
        .then(() => notifySuccess())
        .then(() => {
          window.location.reload();
        })
        .catch((error: any) => {
          console.error(error);
        });
    } else if (userDataPurchases.length == 0) {
      notify();
    } else {
      router.push("/signInPage");
    }
  };

  return (
    <div className=" flex flex-col justify-between md:w-1/4 gap-8 mt-20 mb-10 bg-opal shadow-2xl md:absolute md:top-24 md:right-36 rounded-md p-10">
      <ToastContainer />
      <p className="text-white">Card type</p>
      <div className="flex justify-evenly">
        <img src={"/images/masterCard.png"} />
        <img src={"/images/visa.png"}></img>
        <img src={"/images/runPay.png"}></img>
      </div>
      <form className="flex flex-col  text-white gap-4">
        <label>Name on Card</label>
        <input
          className="text-black"
          type="text"
          placeholder="Name"
          required
          {...register("name", registerOptions.name)}
        ></input>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
        <label>Card Number</label>
        <input
          className="text-black"
          type="number"
          required
          {...register("cardNumber", registerOptions.cardNumber)}
          placeholder="111 2222 6645 4444"
        ></input>
        <small className="text-danger">
          {errors?.cardNumber && errors.cardNumber.message}
        </small>
        <div className="flex">
          <div>
            <label>Expiration date</label>
            <input
              className="text-black"
              type="date"
              required
              {...register("date", registerOptions.date)}
            ></input>
            <small className="text-danger">
              {errors?.date && errors.date.message}
            </small>
          </div>

          <div>
            <label className="uppercase">Cvv</label>
            <input
              {...register("cvv", registerOptions.cvv)}
              required
              className="w-36 text-black"
              type="number"
              placeholder="123"
            ></input>
            <small className="text-danger">
              {errors?.cvv && errors.cvv.message}
            </small>
          </div>
        </div>
      </form>
      <hr></hr>
      <div className="flex justify-between">
        <p className="text-white">Total</p>
        <p className="text-white">${calculateTotal()}</p>
      </div>
      <button
        onClick={handleSubmit((data) => {
          onSubmit(data);
          savePurchaseToDatabase(userDataPurchases, userID);
        })}
        type="submit"
        className="flex  justify-between  bg-green hover:bg-black text-white p-4 rounded-md"
      >
        <p>${calculateTotal()}</p>
        <p>Checkout</p>
      </button>
    </div>
  );
};
export default Order;
//
