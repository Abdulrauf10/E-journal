const router = require ('express').Router();
const {showJournal, getJournalById} = require ("./controllers/journalController");

router.get('/', showJournal);
router.get('/read/:id', getJournalById);

module.exports = router;