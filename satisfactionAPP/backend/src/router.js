const express = require('express');
const researchController = require('./controllers/researchController');
const researchMiddleware = require('./middlewares/researchMiddleware')
const employeeController = require('./controllers/employeeController');
const employeeMiddleware = require('./middlewares/employeeMiddleware');

const router = express.Router();

router.get('/researches', researchMiddleware.validateBody, researchController.getResearches);
router.post('/employee', employeeMiddleware.validateBodyCreateEmployeer ,employeeController.addEmployee);
router.get('/employee', employeeMiddleware.validateBodyGetEmployee, employeeController.getEmployee);


module.exports = router;