const express = require('express');
const researchController = require('./controllers/researchController');
const employeeController = require('./controllers/employeeController');
const employeeMiddleware = require('./middlewares/employeeMiddleware');

const router = express.Router();

router.get('/researches', researchController.getResearches);
router.post('/employee', employeeMiddleware.validateBody ,employeeController.addEmployee);


module.exports = router;