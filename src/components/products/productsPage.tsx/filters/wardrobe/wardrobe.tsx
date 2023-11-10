import React, {FC} from "react"
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { sliding, open } from "@/store/feature-slice";
const Wardrobe: FC = () => {
    const dispatch = useDispatch()
return (
    <>
    <div className="flex flex-col items-center w-full mt-4" >
    <Button className="btn-filter" onClick={() => {
            dispatch(open());
          }}>Open wardrobes</Button>
    
    <Button className="btn-filter" onClick={() => {
            dispatch(sliding());
          }}>Sliding wardrobes</Button>
    
    
    
    </div>
    </>
)
}
export default Wardrobe;