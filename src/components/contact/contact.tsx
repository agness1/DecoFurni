import React, { FC } from "react";

const Contact: FC = () => {
  return (
    <div className="h-screen w-screen bg-opal flex items-center justify-center">
      <div className="bg-white w-1/2 h-1/2 rounded-md flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl pb-16 font-bold">Contact Us!</h1>
        <p className="font-bold text-lg">E-mail</p>
        <p>info@decofurni.com</p>
        <p className="font-bold text-lg">Phone</p>
        <p>+69 672 982 928</p>
      </div>
    </div>
  );
};

export default Contact;
