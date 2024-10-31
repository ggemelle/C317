const questionModel = require('../models/questionModel')

const addQuestion = async (req, res) => {
    const addedQuestion = await questionModel.addQuestion(req.body);
    return res.status(201).json(addedQuestion);
};

const updateQuestion = async (req, res) => {
    const updatedQuestion = await questionModel.updateQuestion(req.body);
    return res.status(200).json(updatedQuestion);
};

const getQuestionsByResearch = async(req, res) => {
    const {research_id} = req.query;
    const caughtQuestionByResearch = await questionModel.getQuestionsByResearch({research_id});
    
    if(caughtQuestionByResearch[0].length === 0){
        return res.status(404).json({message: 'Nenhuma pergunta encontrada'});
    }
    return res.status(200).json(caughtQuestionByResearch[0]);
};

module.exports = {    
    getQuestionsByResearch,
    updateQuestion,
    addQuestion
};