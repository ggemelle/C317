const validateBodyCreateResearch = (req, res, next) => {
    const {body} = req;

    if(body.date == undefined) {
        return res.status(400).json({message: 'The field data is required.'});
    }
    if(body.date == '') {
        return res.status(400).json({message: 'The field data cannot be empty.'});
    }
    if(body.name == undefined) {
        return res.status(400).json({message: 'The field name is required.'});
    }
    if(body.name == ''){
        return res.status(400).json({message: 'The field name cannot be empty.'});
    }
    if(body.employee_id == undefined) {
        return res.status(400).json({message: 'The field employee_id is required.'});
    }
    if(body.employee_id == ''){
        return res.status(400).json({message: 'The field employee_id cannot be empty.'});
    }

    next();
};

const validateParameterGetResearchByEmployee = (req, res, next) => {
    const {employee_id} = req.query;

    if(employee_id == undefined) {
        return res.status(400).json({message: 'The parameter employee_id is required.'});
    }
    if(employee_id == '') {
        return res.status(400).json({message: 'The parameter employee_id cannot be empty.'});
    }

    next();
};

module.exports = {
    validateParameterGetResearchByEmployee,
    validateBodyCreateResearch
};