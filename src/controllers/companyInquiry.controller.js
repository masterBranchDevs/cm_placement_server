const CompanyInquiry = require('../models/companyModel');

const company_inquiry = async (req, res) => {
    try {
        const { companyName, firstName, lastName, mobile } = req.body;
        if(!companyName || !firstName || !lastName || !mobile){
            return res.status(400).json({ 
                status: "Error",
                message: "All fields are required" 
            });
        }
        const newCompanyInquiry = new CompanyInquiry({ companyName, firstName, lastName, mobile });
        await newCompanyInquiry.save();
        res.status(201).json({
            status: "Success",
            message: "Your Company Inquiry has been sent successfully",
            data: newCompanyInquiry
        });
    } catch (error) {
        res.status(500).json({ 
            status: "Error",
            message: "Internal Server Error" 
        });
    }
};

module.exports = {
    company_inquiry
};
