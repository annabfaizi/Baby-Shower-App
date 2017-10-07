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
    console.log(JSON.stringify(req.body, null, 2));

    let newRsvp = new Rsvp(req.body);

    newRsvp.save((err,doc) => {
      if (err) {
        console.log("Error: ", err);
        res.send(err);
      } else {
        console.log("Rsvp added", JSON.stringify(newRsvp, null, 2));
        // Or send the newdoc to the browser
        res.json(newRsvp);
      }
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