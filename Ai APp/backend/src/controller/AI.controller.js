const AI = require('../services/ai-service'); // service import

const getAIResponse = async (req, res) => {
    try {
       const prompt = req.query.prompt
       if(!prompt){
        res.status(400).send("Prompt is requrieed")
       }
       const response = await AI(prompt)
       
        res.send(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAIResponse
};
