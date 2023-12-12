import React, { FC } from "react";
import Link from "next/link";

const HeaderSection: FC = ({}) => {
  return (
    <div className="bg-header bg-no-repeat h-screen bg-fixed bg-center bg-opacity-95 flex flex-col gap-8 justify-center items-center text-white md:text-7xl text-4xl text-center">
      <h1>
        Seamless furniture <br /> with natural fabrics
      </h1>
      <Link href={"/products"}>
        <button
         className="text-xl bg-opal w-36 hover:bg-black p-2 rounded-md"
        >
          Shop all
        </button>
      </Link>
    </div>
  );
};
export default HeaderSection;
