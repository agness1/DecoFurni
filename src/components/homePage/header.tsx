import React, { FC } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

const HeaderSection: FC = ({}) => {
  return (
    <div className="bg-header  bg-no-repeat h-screen bg-fixed bg-center bg-opacity-95 flex flex-col gap-8 justify-center items-center text-white text-7xl text-center">
      <h1>
        Seamless furniture <br /> with natural fabrics
      </h1>
      <Link href={"/products"}>
        <Button
          variant="contained"
          sx={{
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Shop all
        </Button>
      </Link>
    </div>
  );
};
export default HeaderSection;
