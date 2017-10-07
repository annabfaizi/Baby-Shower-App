import React, { Component } from "react";
import API from "../../utils/API";

class Rsvp extends Component {
    constructor() {
      super();
      this.state = {
        inputNameValue: "",
        inputNumValue: ""
    };
      // Binding handleInputChange and handleButtonClick since we'll be passing them as
      // callbacks and 'this' will change otherwise
      this.handleNameInputChange = this.handleNameInputChange.bind(this);
      this.handleNumInputChange = this.handleNumInputChange.bind(this);
      this.handleButtonClickY = this.handleButtonClickY.bind(this);
      this.handleButtonClickN = this.handleButtonClickN.bind(this);
      
    }
    handleNameInputChange(event) {
        this.setState({ inputNameValue: event.target.value });
    }

    handleNumInputChange(event) {
        this.setState({ inputNumValue: event.target.value });
    }

    handleButtonClickY() {
        const newName = this.state.inputNameValue;
        const newNum = this.state.inputNumValue;
        
        let rsvp = {
            name: newName,
            party: newNum,
            attending: true
        }
        console.log("name: " + newName + ", Number of guests coming: " + newNum );

        API.saveRsvp(rsvp);
        this.setState({ inputNameValue: "" });
        this.setState({ inputNumValue: "" });  
    }

    handleButtonClickN() {
        const newName = this.state.inputNameValue;
        const newNum = this.state.inputNumValue;
        
        let rsvp = {
            name: newName,
            party: newNum,
            attending: false
        }
        console.log("name: " + newName + ", Number of guests not coming: " + newNum );

        API.saveRsvp(rsvp);
        this.setState({ inputNameValue: "" });
        this.setState({ inputNumValue: "" });
    }
 
    render() {          

        return (
            <div>
                <div className="w3-container w3-center w3-wide bgimg w3-display-middle padding-200">
                        <h2>HOPE YOU CAN MAKE IT!</h2>

                        <h3 >Kindly Respond By August 31st 2017</h3>
                        <div className="w3-content">
                            <form>  
                                <input className="w3-input w3-border" type="text" placeholder="Full Name(s)" name="name" id="name" 
                                onChange={this.handleNameInputChange}
                                value={this.state.inputNameValue}/>
                                <input className="w3-input w3-border" type="text" placeholder="Number Attending" name="attending" id="attending"
                                onChange={this.handleNumInputChange} 
                                value={this.state.inputNumValue}/>
                            </form>
                            
                            <div className="w3-row">
                                <div className="w3-half">
                                    <button onClick={this.handleButtonClickY} type="submit" className="w3-button w3-block w3-pink" id="going">Going</button>
                                </div>
                                <div className="w3-half">
                                    <button onClick={this.handleButtonClickN} type="submit" className="w3-button w3-block w3-indigo" id="not-going">Can't come</button>
                                </div>
                            </div>
                        <h3>Sincerely, Anna & Ali</h3>
                        </div>
                </div>
            </div>

        );
    }
}
export default Rsvp;