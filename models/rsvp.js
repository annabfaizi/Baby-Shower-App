//RSVP database table creation
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var rsvpSchema = new Schema({
  name: String,
  party: String,
  attending: {
    type: Boolean,
    default: false
  },
  rsvpDate: {
	  type: Date,
	  default: Date.now
  }
});

var Rsvp = mongoose.model("RSVP", rsvpSchema);

module.exports = Rsvp;