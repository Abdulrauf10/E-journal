const {portal} = require ("../models");

module.exports = {
  showJournal: (req, res) => {
    portal.findAll()
    .then((eJournal) => {
      res.status(200).json(eJournal)
    })
    .catch((err) => {
      res.status(500).json({
          result: "FAILED",
          message: err.message || "can not access journal",
        });
    })
  }
}