const answerModel = require('../models/answerModel')

const addAnswer = async (req, res) => {
    const addedAnswer = await answerModel.addAnswer(req.body);
    return res.status(201).json(addedAnswer);
};

const updateAnswer = async (req, res) => {
    const updatedAnswer = await answerModel.updateAnswer(req.body);
    return res.status(200).json(updatedAnswer);
}

const getAnswersByEmployeeQuestion = async(req, res) => {
    const {question_id, employee_id} = req.query;
    const caughtAnswerByQuestion = await answerModel.getAnswersByEmployeeQuestion({question_id, employee_id});
    
    if(caughtAnswerByQuestion[0].length === 0){
        return res.status(404).json({message: 'Nenhuma resposta encontrada'});
    }
    return res.status(200).json(caughtAnswerByQuestion[0]);
};

const getAnswersByEmployee = async(req, res) => {
    const {employee_id} = req.query;
    const caughtAnswerByEmployee = await answerModel.getAnswersByEmployee({employee_id});
    
    if(caughtAnswerByEmployee[0].length === 0){
        return res.status(404).json({message: 'Nenhuma resposta encontrada'});
    }
    return res.status(200).json(caughtAnswerByEmployee[0]);
};

module.exports = {    
    getAnswersByEmployeeQuestion,
    getAnswersByEmployee,
    addAnswer,
    updateAnswer
};