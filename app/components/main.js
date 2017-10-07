import React from "react";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import Shower from "./pages/Shower";
import Footer from "./common/Footer";
import API from "../utils/API";

const Main = props => (
  <div>
    <Navbar />
    <Home />
    <Footer />
  </div>
);

export default Main;