const express = require('express');
const router = express.Router();
const QuestionsController = require('../../../controller/QuestionsController');

console.log('question router')
router.post('/create',QuestionsController.create);
router.get('/view/:id',QuestionsController.showDetails);
router.delete('/delete/:id',QuestionsController.deleteQues);
router.use('/options',require('./options'));

module.exports = router;