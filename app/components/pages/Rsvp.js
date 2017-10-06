import React from "react";

const Rsvp =  () => 
<div>
    <div className="w3-container w3-center w3-wide bgimg w3-display-middle padding-300">
            <h1>HOPE YOU CAN MAKE IT!</h1>

            <h3 >Kindly Respond By August 31st 2017</h3>
            <div className="w3-content">
                <form>  
                    <input className="w3-input w3-border" type="text" placeholder="Full Name(s)" name="name" id="name" />
                    <input className="w3-input w3-border" type="text" placeholder="Number Attending" name="attending" id="attending" />
                </form>
                
                <div className="w3-row">
                    <div className="w3-half">
                        <button type="button" className="w3-button w3-block w3-pink" id="going">Going</button>
                    </div>
                    <div className="w3-half">
                        <button type="button" className="w3-button w3-block w3-indigo" id="not-going">Can't come</button>
                    </div>
                </div>
            <h3>Sincerely, Anna & Ali</h3>
            </div>
    </div>
</div>

export default Rsvp;