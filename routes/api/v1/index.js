const express = require('express');
const router = express.Router();

// This is the entry point of all the api/v1/questions named url's
router.use('/question',require('./questions'));
router.use('/options',require('./options'));

module.exports = router;