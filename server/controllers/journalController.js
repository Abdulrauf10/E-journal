const {portal} = require ("../models");

module.exports = {
  showJournal: async (req, res) => {
    try{
      const data = await portal.findAll();
      return res.status(200).json({data});
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
}