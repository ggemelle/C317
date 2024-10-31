const researchModel = require('../models/researchModel')

const addResearch = async (req, res) => {
    const addedResearch = await researchModel.addResearch(req.body);
    return res.status(201).json(addedResearch);
};

const updateResearch = async (req, res) => {
    const updatedResearch = await researchModel.updateResearch(req.body);
    return res.status(200).json(updatedResearch);
};

const deleteResearch = async (req, res) => {
    const {research_id} = req.query;
    const deletedResearch = await researchModel.deleteResearchById({research_id});

    if (deletedResearch[0].length === 0) {
        return res.status(404).json({ message: 'Nenhuma pesquisa encontrada' });
      }
    return res.status(200).json(deletedResearch[0]);
    
};

const getResearchesByEmployee = async (req, res) => {
    const {employee_id} = req.query;
    const caughtResearchByEmployee = await researchModel.getResearchesByEmployee({employee_id});

    if (caughtResearchByEmployee[0].length === 0) {
        return res.status(404).json({ message: 'Nenhuma pesquisa encontrada' });
      }
    return res.status(200).json(caughtResearchByEmployee[0]);
    
};

module.exports = {    
    getResearchesByEmployee,
    addResearch,
    updateResearch,
    deleteResearch
};