import React, {FC} from "react"
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { armchair, dining, gaming } from "@/store/feature-slice";
const Chair: FC = () => {
    const dispatch = useDispatch()
return (
    <>
    <div className="flex flex-col items-center w-full mt-4" >
    <Button className="btn-filter"onClick={() => {
            dispatch(armchair());
          }}>Armchairs</Button>
    
    <Button className="btn-filter" onClick={() => {
            dispatch(gaming());
          }}>Gaming</Button>
    
    <Button className="btn-filter" onClick={() => {
            dispatch(dining());
          }}>Dining chairs</Button>
    
    </div>
    </>
    
)
}
export default Chair;