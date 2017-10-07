import React, { Component } from "react";
import API from "../../utils/API";

const Rsvp =  (props) => {
    const createRsvp = (event) =>{
        var index = event.target.name;
        props.createRsvp(index);
    }
    return (
        <div>
            <div className="w3-container w3-center w3-wide bgimg w3-display-middle padding-200">
                    <h2>HOPE YOU CAN MAKE IT!</h2>

                    <h3 >Kindly Respond By August 31st 2017</h3>
                    <div className="w3-content">
                        <form>  
                            <input className="w3-input w3-border" type="text" placeholder="Full Name(s)" name="name" id="name" value={props.name}/>
                            <input className="w3-input w3-border" type="text" placeholder="Number Attending" name="attending" id="attending" value={props.party}/>
                        </form>
                        
                        <div className="w3-row">
                            <div className="w3-half">
                                <button onClick={props.saveRsvpY} type="submit" className="w3-button w3-block w3-pink" id="going">Going</button>
                            </div>
                            <div className="w3-half">
                                <button onClick={props.saveRsvpN} type="submit" className="w3-button w3-block w3-indigo" id="not-going">Can't come</button>
                            </div>
                        </div>
                    <h3>Sincerely, Anna & Ali</h3>
                    </div>
            </div>
        </div>
    );
}
export default Rsvp;