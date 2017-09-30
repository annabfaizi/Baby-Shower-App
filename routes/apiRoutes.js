var express = require("express");

var rsvpController = require("../controllers/rsvpController");

var router = new express.Router();

// Get all rsvp (or optionally a specific rsvp with an id)
router.get("/rsvp/:id?", rsvpController.index);
// Create a new rsvp using data passed in req.body
router.post("/rsvp", rsvpController.create);
// Update an existing rsvp with a speicified id param, using data in req.body
router.patch("/rsvp/:id", rsvpController.update);
// Delete a specific rsvp using the id in req.params.id
router.delete("/rsvp/:id", rsvpController.destroy);

module.exports = router;