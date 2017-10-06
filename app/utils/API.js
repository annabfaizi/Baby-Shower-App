import axios from "axios";

const API = {
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