const {portal} = require ("../models");

module.exports = {
  showJournal: async (req, res) => {
    try{
      const data = await portal.findAll();
      return res.status(200).json({data});
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  },

  getJournalById: async (req, res) => {
    try {
      const { id } = req.params;
      const article = await portal.findOne({
        where: { id: id },
      });
      if (article) {
        return res.status(200).json({ article });
      }
      return res
        .status(404)
        .send("Article with the specified ID does not exists");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}