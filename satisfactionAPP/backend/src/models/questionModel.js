const connection = require('./connection')

const addQuestion = async (question) => {
    const {description, weight, Question_id, employee_id} = question;

    const [addedQuestion] = await connection.execute(`INSERT INTO question(question_description, question_weight, Question_id, employee_id)
        VALUES ('${description}', '${weight}','${Question_id}', '${employee_id}');`);
    
        return {insertId: addedQuestion.insertId};
};

const updateQuestion = async(question) => {
    const {description, weight, question_id} = question;
    const [updatedQuestion] = await connection.execute(`UPDATE question SET question_description = '${description}', question_weight = '${weight}'
        WHERE question_id = '${question_id}';`)

    return updatedQuestion;
};

const getQuestionsByResearch = async (idResearch) => {
    const {research_id} = idResearch;

    const caughtQuestionsByQuestion = await connection.execute(`SELECT q.* FROM question q 
        JOIN research r ON q.question_id = r.question_id
        WHERE r.research_id = ${research_id};`);

    return caughtQuestionsByQuestion;
};

const deleteQuestionById = async (idQuestion) => {

    const {question_id} = idQuestion;

    const deleteQuestionById = await connection.execute(`DELETE FROM question 
        WHERE question_id = ${question_id};`);
        
    return deleteQuestionById;
};

module.exports = {
    getQuestionsByResearch,
    addQuestion,
    updateQuestion,
    deleteQuestionById
}