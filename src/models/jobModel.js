const mongoose = require('mongoose');
const baseModel = require('./baseModel')

const jobSchema = new mongoose.Schema({
    ...baseModel,
    jobTitle: String,
    position: String,
},{ timestamps: true });

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;