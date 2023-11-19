import React, { FC } from "react";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { setPrice } from "@/store/priceFilterSlice";
function valuetext(value: number) {
  return `${value}`;
}

const Price: FC = () => {

  const dispatch = useDispatch()
  const [value, setValue] = React.useState<number[]>([49, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="w-1/2 m-auto pt-8 flex flex-col items-center ">
      <p className="text-white text-xl text-center md:pb-10">Price</p>
      <Slider
      className="text-black"
        getAriaLabel={() => "Price"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={2000}
      />
      <button className="capitalize bg-black hover:bg-green text-white m-4 p-2 rounded-md" onClick={() => {dispatch(setPrice(value))}}>filter price</button>
    </div>
  );
};
export default Price;