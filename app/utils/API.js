import axios from "axios";

const API = {
  //save rsvp to db
  saveRsvpY: function(name, party) {
    console.log("In API.js >>>>>>> name: "+ name);
    console.log("party of: " +party);
    
    var newRsvp = {
      name: name,
      partyOf: party,
      attending: true
    }
    console.log(newRsvp);
    return axios.post("/api/rsvp", { newRsvp });
  },
  saveRsvpN: function(name, party) {
    console.log("In API.js >>>>>>> name: "+ name);
    console.log("party of: " +party);
    var newRsvp = {
      name: name,
      partyOf: party,
      attending: false
    }
    console.log(newRsvp);
    return axios.post("/api/rsvp");
  },
  // Retrieves all rsvp from the db
  getRsvp: function() {
    return axios.get("/api/rsvp");
  },
  // Deletes a Rsvp from the db
  deleteRsvp: function(id) {
    return axios.delete(`/api/rsvp/${id}`);
  },
};

export default API;