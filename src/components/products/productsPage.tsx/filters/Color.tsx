import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  black,
  gray,
  blue,
  yellow,
  white,
  brown,
  green,
} from "@/store/color-slice";

const Color: FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center  w-full mt-4">
      <p className="text-white text-xl">Colors</p>
      <div className="flex gap-4 pt-4 items-center justify-center flex-wrap w-1/3">
        <div
          className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer"
          onClick={() => {
            dispatch(blue());
          }}
        ></div>
        <div
          className="w-5 h-5 bg-neutral-950 rounded-full cursor-pointer"
          onClick={() => {
            dispatch(black());
          }}
        ></div>
        <div
          className="w-5 h-5 bg-lime-500 rounded-full cursor-pointer"
          onClick={() => {
            dispatch(green());
          }}
        ></div>
        <div
          className="w-5 h-5 bg-white rounded-full cursor-pointer"
          onClick={() => {
            dispatch(white());
          }}
        ></div>
        <div
          className="w-5 h-5 bg-yellow-400 rounded-full cursor-pointer"
          onClick={() => {
            dispatch(yellow());
          }}
        ></div>
        <div
          className="w-5 h-5 bg-amber-950 rounded-full cursor-pointer"
          onClick={() => {
            dispatch(brown());
          }}
        ></div>
        <div
          className="w-5 h-5 bg-gray-800 rounded-full cursor-pointer"
          onClick={() => {
            dispatch(gray());
          }}
        ></div>
      </div>
    </div>
  );
};

export default Color;
