const connection = require('./connection')

const addResearch = async (research) => {
    const {date, name, employee_id} = research;

    const [addedResearch] = await connection.execute(`INSERT INTO research(research_date, research_name, employee_id) 
        VALUES ('${date}', '${name}', '${employee_id}');`);

    return {insertId: addedResearch.insertId};
};

const updateResearch = async(research) => {
    const {date, name, research_id} = research;
    const [updatedResearch] = await connection.execute(`UPDATE research SET research_date = '${date}', research_name = '${name}'
        WHERE research_id = '${research_id}';`)

    return updatedResearch;
};

const getResearchesByEmployee = async (idEmployee) => {

    const {employee_id} = idEmployee;

    const getResearchesByEmployee = await connection.execute(`SELECT r.* FROM research r 
        JOIN employee e ON r.employee_id = e.employee_id
        WHERE e.employee_id = ${employee_id};`);
        
    return getResearchesByEmployee;
};

const deleteResearchById = async (idResearch) => {

    const {research_id} = idResearch;

    const deleteResearchById = await connection.execute(`DELETE FROM research 
        WHERE research_id = ${research_id};`);
        
    return deleteResearchById;
};

module.exports = {
    getResearchesByEmployee,
    addResearch,
    updateResearch,
    deleteResearchById
};