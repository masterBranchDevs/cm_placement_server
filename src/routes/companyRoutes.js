
const express = require('express');
const router = express.Router();
const companyInquiryController = require('../controllers/companyInquiry.controller');

router.post('/inquiry', companyInquiryController.company_inquiry);

module.exports = router;