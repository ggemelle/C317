const answerModel = require('../models/answerModel')

const addAnswer = async (req, res) => {
    const addedAnswer = await answerModel.addAnswer(req.body);
    return res.status(201).json(addedAnswer);
};

const getAnswersByQuestion = async(req, res) => {
    const {question_id} = req.query;
    const caughtAnswerByQuestion = await answerModel.getAnswersByQuestion({question_id});
    
    if(caughtAnswerByQuestion[0].length === 0){
        return res.status(404).json({message: 'Nenhuma resposta encontrada'});
    }
    return res.status(200).json(caughtAnswerByQuestion[0]);
};

module.exports = {    
    getAnswersByQuestion,
    addAnswer
};