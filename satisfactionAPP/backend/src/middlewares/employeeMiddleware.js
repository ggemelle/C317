const validateBodyCreateEmployeer = (req, res, next) => {
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
    if(body.email == undefined) {
        return res.status(400).json({message: 'The field "email" is required.'});
    }
    if(body.email == ''){
        return res.status(400).json({message: 'The field "email" cannot be empty.'});
    }
    if(body.password == undefined) {
        return res.status(400).json({message: 'The field "password" is required.'});
    }
    if(body.password == ''){
        return res.status(400).json({message: 'The field "password" cannot be empty.'});
    }

    next();
};

const validateBodyGetEmployee = (req, res, next) => {
    const {email, password} = req.query;

    if (email === undefined) {
        return res.status(400).json({ message: 'The field "email" is required.' });
    }
    if (email === '') {
        return res.status(400).json({ message: 'The field "email" cannot be empty.' });
    }
    if (password === undefined) {
        return res.status(400).json({ message: 'The field "password" is required.' });
    }
    if (password === '') {
        return res.status(400).json({ message: 'The field "password" cannot be empty.' });
    }

    next();
}

module.exports = {
    validateBodyCreateEmployeer,
    validateBodyGetEmployee

};