import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./home";
import Shop from "./shop";
const Rout = () =>{
    return(
        <>
           <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="shop" element={<Shop />}/>
           </Routes>
        </>
    )
}

export default Rout;