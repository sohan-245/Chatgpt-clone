import { useState } from "react";
import SideBar from "./Sidebar";
import TopSideBar from "./TopSidebar";
import ClosedSideBar from "./ClosedSideBar";

function State(){
    const [open,setOpen]=useState(false);
    console.log(open)
    return(
        <div>
            <div className="flex flex-row gap-10 w-50 items-center m-4 justify-between">
            <TopSideBar/>
            <button onClick={()=>{setOpen(!open)}}><img src="/sidebaricon.png" style={{width:"45px",height:"30px"}}/></button>  
            </div>
            {open ? (<div className="absolute top-13 left-1"><SideBar/></div>
            ):(
            <div className=""><ClosedSideBar/></div>)}  
        </div>    
    )
}
export default State