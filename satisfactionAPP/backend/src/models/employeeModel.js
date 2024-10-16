const connection = require('./connection')

const addEmployee = async (employee) => {
    const {name, type} = employee;

    const [addedEmployee] = await connection.execute(`INSERT INTO employee(employee_name, employee_type) VALUES ('${name}', '${type}')`);

    return {insertId: addedEmployee.insertId};
};

module.exports = {
    addEmployee
};