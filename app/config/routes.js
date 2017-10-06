import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "../components/Main";
import Home from "../components/pages/Home";
import Shower from "../components/pages/Shower";
import Details from "../components/pages/Details";
import Rsvp from "../components/pages/Rsvp";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const routes = () =>
<Router>
    <div>
      <Navbar/>
        <Route exact path="/" component={Main}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/shower" component={Shower} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/rsvp" component={Rsvp} /> */}
      <Footer />
    </div>
  </Router>;

export default routes;