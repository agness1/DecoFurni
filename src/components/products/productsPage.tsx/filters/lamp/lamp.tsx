import React, {FC} from "react"
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { floor,ceiling } from "@/store/feature-slice";
const  Lamp: FC = () => {
    const dispatch = useDispatch()
return (
    <>
    <div className="flex flex-col items-center w-full mt-4" >
    <Button className="btn-filter" onClick={() => {
            dispatch(floor());
          }}>Floor lamps</Button>
    
    <Button className="btn-filter" onClick={() => {
            dispatch(ceiling());
          }} >Ceiling lamps</Button>
    </div>
    </>
)
}
export default Lamp;