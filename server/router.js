const router = require ('express').Router();
const {showJournal} = require ("./controllers/journalController");

router.get('/', showJournal);

module.exports = router;