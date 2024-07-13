import { useState } from "react";
import Logo from "../assets/img/Logo.jpg"
import {Link} from "react-router-dom"

//SPA- Single Page Application 
//Client side routing

const Title =() =>{
    return( <>
     <a href="/">
     <img 
         className="h-24"
         src={Logo} 
         alt="logo" />
     </a>
     </>
     );
 };

 const Header=()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false);
     return(
         <div className="flex justify-between bg-pink-50 shadow-lg">
         <Title/>
             <div className="nav-items" > 
                 <ul className="flex py-8 space-x-10 font-bold">
                    
                     <li><Link to="/">Home</Link></li>    
                     <li> <Link to="/about">About</Link> </li>    
                     <li><Link to="/contact">Contact</Link> </li>    
                     <li><Link to="/instamart">Instamart</Link> </li>    
                     <li>Cart</li>    
                 </ul>
             </div>  
             {isLoggedIn? (
                <button className="font-bold bg-purple-400 mx-5 text-black hover:bg-gray-500" onClick={()=> setIsLoggedIn(false)}>Logout</button>
             ) : (
                <button className="font-bold bg-purple-400 mx-5 text-black hover:bg-gray-500" onClick={()=>setIsLoggedIn(true)}>Login</button>
             )} 
         </div>
     );
 };
 export default Header;