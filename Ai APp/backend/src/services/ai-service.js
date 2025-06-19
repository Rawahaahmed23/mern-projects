require('dotenv').config(); 
const { GoogleGenerativeAI } = require('@google/generative-ai');

const ai = new GoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GEMNI,
});



if(!ai){
  console.log(ai
  );
  
}

async function AI() {
    try {
        const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent("Explain how AI works in a few words");
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.log( error.message);
      
    }
}

module.exports = AI;
