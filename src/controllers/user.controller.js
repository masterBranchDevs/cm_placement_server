const Recent_Applied = require('../models/clientModel');

// People Applying for Job
const applyForJob = async (req, res) => {
    try {
        const { 
            fullName, age, gender, education, currentLocation, 
            currentJob, totalExperience, currentSalary, expectedSalary, 
            email, mobile, position 
        } = req.body;

        // Check if all fields are provided
        if (!fullName || !age || !gender || !education || !currentLocation ||
            !currentJob || !totalExperience || !currentSalary || !expectedSalary ||
            !email || !mobile || !position) {
            return res.status(400).json({
                status: "Error",
                message: "All fields are required!"
            });
        }

        // Create a new job application entry
        const newJobApplication = new Recent_Applied({
            fullName, age, gender, education, currentLocation,
            currentJob, totalExperience, currentSalary, expectedSalary,
            email, mobile, position
        });

        await newJobApplication.save();

        res.status(201).json({
            status: "Success",
            message: "Job Applied Successfully!"
        });

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Internal server error!"
        });
    }
};

module.exports = {
    applyForJob
};
