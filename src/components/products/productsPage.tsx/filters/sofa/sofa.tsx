import React, {FC} from "react"
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { folding, corner } from "@/store/feature-slice";
const Sofa: FC = () => {
    const dispatch = useDispatch()

return (
    <>
    <div className="flex flex-col items-center w-full mt-4" >
    <Button className="btn-filter" onClick={() => {
            dispatch(folding());
          }}>Folding sofas</Button>
    
    <Button className="btn-filter " onClick={() => {
            dispatch(corner());
          }}>Corner sofas</Button>
    
    
    
    </div>
    </>
)
}
export default Sofa;