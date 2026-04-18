import { Outlet } from "react-router-dom"; 
import BottomNav from "../components/BottomNav"; 

export default function Layout() { 
    return ( 
        <div className="pb-16"> 
            <Outlet /> 
            <BottomNav /> 
        </div> ); 
        
}