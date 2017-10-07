import axios from "axios";

const API = {
  //save rsvp to db
  saveRsvpY: function(rsvp) {
    var newRsvp = {
      name: rsvp.name,
      party: rsvp.party,
      attending: true
    }
    return axios.post("/api/rsvp");
  },
  saveRsvpN: function(rsvp) {
    var newRsvp = {
      name: rsvp.name,
      party: rsvp.party,
      attending: false
    }
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