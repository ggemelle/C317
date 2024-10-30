const connection = require('./connection')

const addResearch = async (research) => {
    const {date, name, employee_id} = research;

    const [addedResearch] = await connection.execute(`INSERT INTO research(research_date, research_name, employee_id) 
        VALUES ('${date}', '${name}', '${employee_id}');`);

    return {insertId: addedResearch.insertId};
};

const getResearchesByEmployee = async (idEmployee) => {

    const {employee_id} = idEmployee;

    const getResearchesByEmployee = await connection.execute(`SELECT r.* FROM research r 
        JOIN employee e ON r.employee_id = e.employee_id
        WHERE e.employee_id = ${employee_id};`);
        
    return getResearchesByEmployee;
};

module.exports = {
    getResearchesByEmployee,
    addResearch
};