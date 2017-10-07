//RSVP database table creation
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var rsvpSchema = new Schema({
  name: String,
  party: Number,
  attending: {
    type: Boolean,
    default: false
  },
  rsvpdate: {
	  type: Date,
	  default: Date.now
  }
});

var Rsvp = mongoose.model("Rsvp", rsvpSchema);

module.exports = Rsvp;