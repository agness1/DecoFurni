import React, { FC } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { sofa, lamp, wardrobe, chair, all } from "../../../store/filter-slice";
import { defaults } from "@/store/feature-slice";
import { allColors } from "@/store/color-slice";
import { setPageAll, setPageCategory } from "@/store/page-slice";



const ButtonsCategory: FC = ({  }) => {
  const dispatch = useDispatch();
 

  return (
    <div className="w-full h-52 flex-wrap flex justify-center items-end  content-center md:content-end md:gap-8 md:p-2">

      <Link href={{
          pathname: `/products`,
        }}>
      <Button
        className="lowercase bg-opal text-white w-20 hover:bg-black rounded-md m-2 active:bg-black"
        onClick={() => {
        
         dispatch(setPageAll())
          dispatch(all());
          dispatch(allColors())
        }}
      >
        all
      </Button>
      </Link>
      <Link
        href={{
          pathname: `/category/${"sofas"}`,
          query: { category: "sofas" },
        }}
        className="visited:bg-black"
      >
        <Button
          className="lowercase bg-opal text-white w-20 hover:bg-black rounded-md m-2 "
          onClick={() => {
            
            dispatch(setPageCategory())
            dispatch(sofa());
            dispatch(defaults());
          }}
        >
          Sofas
        </Button>
      </Link>

      <Link
        href={{
          pathname: `/category/${"chairs"}`,
          query: { category: "chairs" },
        }}
      >
        <Button
          className="lowercase bg-opal text-white w-20 hover:bg-black rounded-md m-2"
          onClick={() => {
            dispatch(setPageCategory())
            dispatch(chair());
            dispatch(defaults());
          }}
        >
          Chairs
        </Button>
      </Link>

      <Link
        href={{
          pathname: `/category/${"wardrobes"}`,
          query: { category: "wardrobes" },
        }}
      >
        <Button
          className="lowercase bg-opal text-white w-20 hover:bg-black rounded-md m-2"
          onClick={() => {
            dispatch(setPageCategory())
            dispatch(wardrobe());
            dispatch(defaults());
          }}
        >
          Wardrobes
        </Button>
      </Link>

      <Link
        href={{
          pathname: `/category/${"lamps"}`,
          query: { category: "lamps" },
        }}
      >
        <Button
          className="lowercase bg-opal text-white w-20 hover:bg-black rounded-md m-2"
          onClick={() => {
          
            dispatch(lamp());
            dispatch(defaults());
            dispatch(setPageCategory())
          }}
        >
          Lamps
        </Button>
      </Link>
    </div>
  );
};
export default ButtonsCategory;
