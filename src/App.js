import React from "react";
import Nav from "../src/components/nav"
import Rout from "./components/rout"
import Footer from "./components/footer";
import {BrowserRouter} from "react-router-dom";
const App = () => {
  return(
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;