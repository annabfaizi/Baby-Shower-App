import React from "react";

const Details =  () => 
<div>
    <div className="w3-container w3-center w3-wide w3-display-middle padding-100">
            <h1 className="w3-jumbo w3-center w3-text-black"><b>The Shower</b></h1>
            
            <h3> Hosted by Name.</h3>
            <div className="w3-row">
                <div className="w3-half">
                <h2><b>When</b></h2>
                <h3>Date @ Time</h3>
                </div>
                <div className="w3-half">
                <h2><b>Where</b></h2>
                <h3>Address Here</h3>        
                </div>
                <div>
                <h2><b>Registry</b></h2>
                <h3>The expecting couple is registered at Registry Name, please click <a href="#" target="_blank" className="w3-hover-text-green">here</a>.</h3>
                </div>
            </div>
    </div>
</div>

export default Details;