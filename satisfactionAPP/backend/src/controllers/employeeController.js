const employeeModel = require('../models/employeeModel')

const addEmployee = async (req, res) => {
    const addedEmployee = await employeeModel.addEmployee(req.body);
    return res.status(201).json(addedEmployee);
};

const getEmployee = async (req, res) => {
    const { email, password } = req.query;
    const caughtEmployee = await employeeModel.getEmployee({ email, password });
    console.log(caughtEmployee)
    if (caughtEmployee.length === 0) {
        return res.status(404).json({ message: 'Funcionário não encontrado' });
      }

    console.log(caughtEmployee)
    return res.status(200).json(caughtEmployee[0]);
    
}

module.exports = {

    addEmployee,
    getEmployee

};