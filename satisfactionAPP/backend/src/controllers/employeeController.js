const employeeModel = require('../models/employeeModel');

const addEmployee = async (req, res) => {
    const addedEmployee = await employeeModel.addEmployee(req.body);
    return res.status(201).json(addedEmployee);
};

module.exports = {

    addEmployee

};