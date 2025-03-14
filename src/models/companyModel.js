const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    companyName: String,
    firstName: String,
    lastName: String,
    mobile: String,
},{ timestamps: true });

const CompanyInquiry = mongoose.model('CompanyInquiry', jobSchema);
module.exports = CompanyInquiry;