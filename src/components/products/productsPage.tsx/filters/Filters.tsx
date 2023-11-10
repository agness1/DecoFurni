import React, { FC } from "react";
import Color from "./Color";
import Lamp from "./lamp/lamp";
import Sofa from "./sofa/sofa";
import Wardrobe from "./wardrobe/wardrobe";
import Chair from "./chair/chair";
import Price from "./Price";
import { useSelector } from "react-redux";

const Filters: FC = () => {
  const filterValue = useSelector((state: any) => state.filter.value);
  console.log(filterValue)
  const setFilter = () => {
    switch(filterValue) {
      case 'sofa': 
      return <> <Sofa /> <Color/> <Price/> </> ;
    case 'lamp':
      return <><Lamp /> <Color/> <Price/> </>  ;
    case 'wardrobe': 
      return <>  <Wardrobe /> <Color/> <Price/> </>;
    case 'chair': 
      return  <><Chair /> <Color/> <Price/> </> ;
    case 'all':
      return <> <Color/> <Price/> </>  ;
      default:
        return <Color/>
    }
  }
  return (
    <div  className="w-full">
    {setFilter()}  
    </div>
  );
};
export default Filters;
