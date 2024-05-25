import { Outlet } from "react-router-dom";

import VP_Header from "../VP_Header/VP_Header"
import VP_Footer from "../VP_Footer/VP_Footer"

export default function VP_Base(){
    return(
        <>
            <VP_Header></VP_Header>
            <Outlet></Outlet>
            <VP_Footer></VP_Footer>
        </>
    )
}