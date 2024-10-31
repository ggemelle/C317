const validateBodyCreateAnswer = (req, res, next) => {
    const {body} = req;

    if(body.answer_value == undefined) {
        return res.status(400).json({message: 'The field answer_value is required.'});
    }
    if(body.answer_value == '') {
        return res.status(400).json({message: 'The field answer_value cannot be empty.'});
    }
    if(body.question_id == undefined) {
        return res.status(400).json({message: 'The field question_id is required.'});
    }
    if(body.question_id == '') {
        return res.status(400).json({message: 'The field question_id cannot be empty.'});
    }
    if(body.research_id == undefined) {
        return res.status(400).json({message: 'The field research_id is required.'});
    }
    if(body.research_id == ''){
        return res.status(400).json({message: 'The field research_id cannot be empty.'});
    }
    if(body.employee_id == undefined) {
        return res.status(400).json({message: 'The field employee_id is required.'});
    }
    if(body.employee_id == ''){
        return res.status(400).json({message: 'The field employee_id cannot be empty.'});
    }

    next();
};

const validateParameterGetAnswerByQuestion = (req, res, next) => {
    const {question_id} = req.query;

    if(question_id == undefined) {
        return res.status(400).json({message: 'The parameter question_id is required.'});
    }
    if(question_id == '') {
        return res.status(400).json({message: 'The parameter question_id cannot be empty.'});
    }

    next();
};

module.exports = {
    validateBodyCreateAnswer,
    validateParameterGetAnswerByQuestion
};