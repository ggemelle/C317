const connection = require('./connection')

const addAnswer = async (answer) => {
    const {answer_value, question_id, research_id, employee_id} = answer;

    const [addedAnswer] = await connection.execute(`INSERT INTO answer(answer_value, question_id, research_id, employee_id)
        VALUES ('${answer_value}', '${question_id}','${research_id}', '${employee_id}');`);
    
        return {insertId: addedAnswer.insertId};
};

const getAnswersByQuestion = async (idQuestion) => {
    const {question_id} = idQuestion;

    const caughtAnswersByQuestion = await connection.execute(`SELECT a.* FROM Answer a 
        JOIN question q ON a.question_id = q.question_id
        WHERE q.question_id = ${question_id};`);

    return caughtAnswersByQuestion;
} 

module.exports = {
    getAnswersByQuestion,
    addAnswer
}