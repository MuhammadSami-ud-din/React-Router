
import { NavLink } from "react-router";

export default function MyAppNav(){
    return(
        <nav>
            <NavLink to={'/about'} style={({ isActive }) => ({
     color: isActive ? "red" : "black",
   })} end>About</NavLink>
            <NavLink to={'/'} 
           style={({ isActive }) => ({
     color: isActive ? "red" : "black",
   })} end>Home</NavLink>
        </nav>
    )
}