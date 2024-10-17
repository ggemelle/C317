const researchModel = require('../models/researchModel')

const getResearches = async (req, res) => {
    
    const [researches] = await researchModel.getResearches(req.body);

    return res.status(200).json(researches);
};

module.exports = {
    getResearches
};