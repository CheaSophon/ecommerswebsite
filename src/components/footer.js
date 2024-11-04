import React  from "react";
import './footer.css'
import { GiPiggyBank } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
const footer = () =>{
    return(
        <>
            <div className="footer">
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <div className="icon_box">
                                <GiPiggyBank />
                            </div>
                            <div className="detail">
                                <h3>great Saving</h3>
                                <p>Lorem ipsum dorlor sit amet.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                            <FaShippingFast />
                            </div>
                            <div className="detail">
                                <h3>Free delivery</h3>
                                <p>Lorem ipsum dorlor sit amet.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                             <FaHeadphones />
                            </div>
                            <div className="detail">
                                <h3>24X7 support</h3>
                                <p>Lorem ipsum dorlor sit amet.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon_box">
                             <IoWallet />
                            </div>
                            <div className="detail">
                                <h3>Money Back</h3>
                                <p>Lorem ipsum dorlor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="header">
                            <img src="image/logo.webp" alt="logo"></img>
                            <p>Lorem ipsum dorlor sit amet, consectetur Mulissecing slit. Duis faucibus ipsum id sem putconsequat Text</p>
                        </div>
                        <div className="buutom">
                            <div className="box">
                                <h3>Your Account</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Account</li>
                                    <li>Payment</li>
                                    <li>sales</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>track Order</li>
                                    <li>New product</li>
                                    <li>old product</li>
                                </ul>
                            </div>
                            <div className="box">
                                <h3>contact us</h3>
                                <ul>
                                    <li>4005, Silver Business pointIndie</li>
                                    <li>+(855)716410229</li>
                                    <li>cheasophon35@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default footer;