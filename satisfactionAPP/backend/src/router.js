const express = require('express');
const researchController = require('./controllers/researchController');
const researchMiddleware = require('./middlewares/researchMiddleware');
const questionController = require('./controllers/questionController');
const questionMiddleware = require('./middlewares/questionMiddleware');
const employeeController = require('./controllers/employeeController');
const employeeMiddleware = require('./middlewares/employeeMiddleware');
const answerController = require('./controllers/answerController');
const answerMiddleware = require('./middlewares/answerMiddleware');

const router = express.Router();

router.get('/researches', researchMiddleware.validateParameterGetResearchByEmployee, researchController.getResearchesByEmployee);
router.post('/researches', researchMiddleware.validateBodyCreateResearch, researchController.addResearch);
router.put('/researches', researchMiddleware.validateBodyupdateResearch, researchController.updateResearch);
router.delete('/researches', researchMiddleware.validateParameterDeleteResearch, researchController.deleteResearch);


router.get('/questions', questionMiddleware.validateParameterGetQuestionByResearch,questionController.getQuestionsByResearch);
router.post('/questions', questionMiddleware.validateBodyCreateQuestion, questionController.addQuestion);
router.put('/questions', questionMiddleware.validateBodyUpdateQuestion, questionController.updateQuestion);
router.delete('/questions', questionMiddleware.validateParameterDeleteQuestion, questionController.deleteQuestion);



router.post('/employee', employeeMiddleware.validateBodyCreateEmployeer ,employeeController.addEmployee);
router.get('/employee', employeeMiddleware.validateBodyGetEmployee, employeeController.getEmployee);


router.post('/answers', answerMiddleware.validateBodyCreateAnswer, answerController.addAnswer);
router.get('/answers', answerMiddleware.validateParameterGetAnswerByQuestion, answerController.getAnswersByQuestion);

module.exports = router;