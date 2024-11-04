import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


import "./nav.css";

const Nav = () =>{
    const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();
   return(
    
   <>
    <div className="header">
        <div className="top_header">
            <div className="icon">
                <MdLocalShipping />
            </div>
            <div className="info">
                <p>Free Shipping When Shopping upto $1000</p>
            </div>
        </div>
        <div className="mid_header">
            <div className="logo">
                <img src="image/logo.webp" alt="logo"></img>
            </div>
            <div className="serach_box">
                <input type="text" value="" placeholder="serach"></input>
                <button><IoMdSearch /></button>
            </div>
            
            {
                // buttom logout when user login show buttom logout
                isAuthenticated ?
                <div className="user">
                    <div className="icon">
                    <FiLogOut />
                    </div>
                    <div className="btn">
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button>
                    </div>
                </div>
                :
                // buttom login when user logout show buttom logout
                 <div className="user">
                 <div className="icon">
                 <FiLogIn />
                 </div>
                 <div className="btn">
                     <button onClick={() => loginWithRedirect()}>Login</button>
                 </div>
             </div>
            }
        </div>
        <div className="lish_header">
            <div className="user_profile">
                {
                    isAuthenticated?
                    <>
                    <div className="icon">
                        <FaUser />
                    </div>
                    <div className="info">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    </>
                    :
                    <>
                    <div className="icon">
                        <FaUser />
                    </div>
                    <div className="info">
                        <p>Pleas Login</p>
                    </div>
                    </>
                }
            </div>
            <div className="nav">
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/shop" className="link">Shop</Link></li>
                    <li><Link to="/collection" className="link">Collection</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/contant" className="link">Contant</Link></li>
                </ul>
            </div>
            <div className="offer">
                <p>Flat 10% over all Iphone</p>
            </div>
        </div>
    </div>
   </>
   )
}
export default Nav;