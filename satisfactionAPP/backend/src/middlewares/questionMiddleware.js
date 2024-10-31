const validateBodyCreateQuestion = (req, res, next) => {
    const {body} = req;

    if(body.description == undefined) {
        return res.status(400).json({message: 'The field description is required.'});
    }
    if(body.description == '') {
        return res.status(400).json({message: 'The field description cannot be empty.'});
    }
    if(body.weight == undefined) {
        return res.status(400).json({message: 'The field weight is required.'});
    }
    if(body.weight == '') {
        return res.status(400).json({message: 'The field weight cannot be empty.'});
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

const validateBodyUpdateQuestion = (req, res, next) => {
    const {body} = req;

    if(body.description == undefined) {
        return res.status(400).json({message: 'The field description is required.'});
    }
    if(body.description == '') {
        return res.status(400).json({message: 'The field description cannot be empty.'});
    }
    if(body.weight == undefined) {
        return res.status(400).json({message: 'The field weight is required.'});
    }
    if(body.weight == '') {
        return res.status(400).json({message: 'The field weight cannot be empty.'});
    }

    next();
};

const validateParameterGetQuestionByResearch = (req, res, next) => {
    const {research_id} = req.query;

    if(research_id == undefined) {
        return res.status(400).json({message: 'The parameter research_id is required.'});
    }
    if(research_id == '') {
        return res.status(400).json({message: 'The parameter research_id cannot be empty.'});
    }

    next();
};

const validateParameterDeleteQuestion = (req, res, next) => {
    const {question_id} = req.query;

    if(question_id == undefined) {
        return res.status(400).json({message: 'The field question_id is required.'});
    }
    if(question_id == '') {
        return res.status(400).json({message: 'The field question_id cannot be empty.'});
    }

    next();
};

module.exports = {
    validateBodyCreateQuestion,
    validateBodyUpdateQuestion,
    validateParameterGetQuestionByResearch,
    validateParameterDeleteQuestion
};