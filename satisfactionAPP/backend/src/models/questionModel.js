const connection = require('./connection')

const addQuestion = async (question) => {
    const {description, weight, research_id, employee_id} = question;

    const [addedQuestion] = await connection.execute(`INSERT INTO question(question_description, question_weight, research_id, employee_id)
        VALUES ('${description}', '${weight}','${research_id}', '${employee_id}');`);
    
        return {insertId: addedQuestion.insertId};
};

const getQuestionsByResearch = async (idResearch) => {
    const {research_id} = idResearch;

    const caughtQuestionsByResearch = await connection.execute(`SELECT q.* FROM question q 
        JOIN research r ON q.research_id = r.research_id
        WHERE r.research_id = ${research_id};`);

    return caughtQuestionsByResearch;
} 

module.exports = {
    getQuestionsByResearch,
    addQuestion
}