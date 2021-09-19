const router = require ('express').Router();
const {showJournal} = require ("./controllers/journalController");

router.get('/e-journal', showJournal);

module.exports = router;