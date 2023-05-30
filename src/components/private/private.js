import { Outlet,useLocation,Navigate } from "react-router-dom";


function Private(){
    return(
        <div>
            <Outlet/>
        </div>
    )
}
export default Private;