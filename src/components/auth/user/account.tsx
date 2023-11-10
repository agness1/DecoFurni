import React, { FC } from "react";
import { Button } from "@mui/material";
import { auth } from "@/firebase";
import Purchases from "./purchases";
const Account: FC = () => {


    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
        
      }
      console.log(user?.displayName)
  return (
    <section className=" flex flex-col gap-20 items-center  w-9/12 min-h-screen absolute inset-x-0 top-24  m-auto border-4 rounded-md pb-8 ">
      <h1 className="text-4xl font-bold p-4">Your Account</h1>

      <div className="flex gap-64 w-full justify-center">
        <div className="flex flex-col justify-around items-start  p-8 h-60 w-1/2 shadow-2xl">
          <p>nick: {user?.displayName}</p>
          <p>Your e-mail: {user?.email}</p>
          <Button className="bg-opal text-white  hover:bg-black p-2 px-8 text-sm capitalize">
            Update your e-mail
          </Button>
          <p>Your Phone Number:</p>
          <Button className="bg-opal text-white  hover:bg-black p-2 px-8 text-sm capitalize">
            Update your phone number
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-slate-600 rounded-full"><img src={user?.photoURL}/></div>
          <Button className="bg-opal text-white  hover:bg-black p-2 px-8 text-sm capitalize">
            Update your avatar
          </Button>
        </div>
      </div>
      <div className="w-4/5">
        <h2 className="text-3xl font-bold p-4 ">Your Products</h2>
        <div className="w-full shadow-xl"></div>
      </div>
      <Purchases/>
      <div><Button className="bg-rose-600 text-white  hover:bg-black p-2 px-8 text-sm capitalize">Delete account</Button></div>
    </section>
  );
};

export default Account;
