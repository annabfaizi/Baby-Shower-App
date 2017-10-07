var Rsvp = require("../models/rsvp");

module.exports = {
  // This method handles retrieving rsvp from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Rsvp.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new rsvp
  create: function(req, res) {
    var newRsvp = new Rsvp({
      name: req.body.name,
      partyOf: req.body.party
    });
    console.log("we got here " + req.body.name);
    newRsvp.create(function(err) {
      if (err) {
        return res.send(err);
      }
      res.json(newRsvp);
    });
  },
  // This method handles deleting rsvp
  destroy: function(req, res) {
    Rsvp.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};