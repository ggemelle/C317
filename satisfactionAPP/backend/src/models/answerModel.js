const connection = require('./connection')

const addAnswer = async (answer) => {
    const {answer_value, question_id, research_id, employee_id} = answer;

    const [addedAnswer] = await connection.execute(`INSERT INTO answer(answer_value, question_id, research_id, employee_id)
        VALUES ('${answer_value}', '${question_id}','${research_id}', '${employee_id}');`);
    
        return {insertId: addedAnswer.insertId};
};

const updateAnswer = async (answer) => {
    const {answer_value, question_id, employee_id} = answer
    const [updatedAnswer] = await connection.execute(`UPDATE answer SET answer_value = '${answer_value}'
         WHERE question_id = '${question_id}' AND employee_id = '${employee_id}';`);
    return updatedAnswer;
}

const getAnswersByEmployeeQuestion = async (Answer) => {
    const {question_id, employee_id} = Answer;

    const caughtAnswersByQuestion = await connection.execute(`SELECT a.* FROM answer a 
        JOIN question q ON a.question_id = q.question_id
        WHERE q.question_id = ${question_id} AND a.employee_id = ${employee_id};`);

    return caughtAnswersByQuestion;
}

const getAnswersByEmployee = async (idEmployee) => {
    const {employee_id} = idEmployee;

    const caughtAnswersByEmployee = await connection.execute(`SELECT a.* FROM Answer a 
        JOIN employee e ON a.employee_id = e.employee_id
        WHERE e.employee_id = ${employee_id};`);

    return caughtAnswersByEmployee;
}

module.exports = {
    getAnswersByEmployeeQuestion,
    addAnswer,
    getAnswersByEmployee,
    updateAnswer
}