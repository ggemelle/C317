const connection = require('./connection')

const getResearches = async (idResearch) => {

    const {id} = idResearch;

    const getResearches = await connection.execute(`SELECT r.* FROM research r 
        JOIN employee_has_research er ON r.research_id = er.Research_research_id
        JOIN employee e ON er.Employee_employee_id = e.employee_id
        WHERE e.employee_id = ${id};`);
        
    return getResearches
};

module.exports = {
    getResearches
};