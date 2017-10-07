//RSVP database table creation
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var rsvpSchema = new Schema({
  name: String,
  partyOf: String,
  attending: {
    type: Boolean
  },
  rsvpDate: {
	  type: Date,
	  default: Date.now
  }
});

var Rsvp = mongoose.model("rsvp", rsvpSchema);

module.exports = Rsvp;