const express = require('express');
const router = express.Router();

console.log('Router is loaded');
// This is the entry point of all the  named url's
router.use('/api',require('./api/index'));

module.exports = router;
