const validateBody = (req, res, next) => {
    const {body} = req;

    if(body.id == undefined) {
        return res.status(400).json({message: 'The field "id" is required.'});
    }
    if(body.id == '') {
        return res.status(400).json({message: 'The field "id" cannot be empty.'});
    }

    next();
};

module.exports = {
    validateBody
};