const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true},
    education: { type: String, required: true },
    currentLocation: { type: String, required: true },
    currentJob: { type: String, required: true },
    totalExperience: { type: String, required: true },
    currentSalary: { type: String, required: true },
    expectedSalary: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    position: { type: String, required: true }
}, { timestamps: true });

const ClientForm = mongoose.model('Recent_Applied', formSchema);

module.exports = ClientForm;
