const connection = require('./connection')

const addEmployee = async (employee) => {
    const {name, type, email, password } = employee;

    const [addedEmployee] = await connection.execute(`INSERT INTO employee(employee_name, employee_type, employee_email, employee_password) VALUES ('${name}', '${type}', '${email}', '${password}');`);

    return {insertId: addedEmployee.insertId};
};

const getEmployee = async(loginEmployee) => {
    const { email, password } = loginEmployee;
    const [caughtEmployee] = await connection.execute(
        `SELECT * FROM employee WHERE employee_email = ? AND employee_password = ?`,
        [email, password]
    );
    return caughtEmployee;
}

module.exports = {
    addEmployee,
    getEmployee
};