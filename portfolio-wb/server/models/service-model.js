const { Schema, model,Mongoose } = require('mongoose');

const ServiceSchema = new Schema({
  service: { type: String, required: true },
  message: { type: String, required: true },
  picture: { type: String, required: true },
  deploymentLink: { type: String, required: true },
  icon: { type: String, required: true }
});

const  Service = model('Service', ServiceSchema);
module.exports = Service