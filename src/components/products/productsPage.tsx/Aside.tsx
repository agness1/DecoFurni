import React, { FC } from "react";
import Filters from "./filters/Filters";
import { useDispatch } from "react-redux";
import { allColors } from "@/store/color-slice";
const Aside: FC = () => {
  const dispatch = useDispatch();
  dispatch(allColors());
  return (
    <div className="md:basis-1/4 bg-opal relative">
      <div className="text-center text-white text-2xl p-2 w-full">Filters</div>
      <hr className="border-2"></hr>
      <div className="flex flex-col items-center gap-8 pt-4 overflow-y-auto  ">
        <Filters />
      </div>
    </div>
  );
};
export default Aside;
