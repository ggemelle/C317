const { response } = require("express");

const validateBody = (req, res, next) => {
    const {body} = req;

    if(body.name == undefined) {
        return res.status(400).json({message: 'The field "name" is required.'});
    }
    if(body.name == '') {
        return res.status(400).json({message: 'The field "name" cannot be empty.'});
    }
    if(body.type == undefined) {
        return res.status(400).json({message: 'The field "type" is required.'});
    }
    if(body.type == ''){
        return res.status(400).json({message: 'The field "type" cannot be empty.'});
    }

    next();
};

module.exports = {
    validateBody
};