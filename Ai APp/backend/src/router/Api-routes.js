require('dotenv').config();
const express = require('express');
const router = express.Router();

const aiController = require('../controller/AI.controller');

router.route('/get-response').get(aiController.getAIResponse);

module.exports = router;
