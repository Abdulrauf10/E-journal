const router = require ('express').Router();
const {showJournal, getJournalById} = require ("./controllers/journalController");

router.get('/', showJournal);
router.get('/:id', getJournalById);

module.exports = router;