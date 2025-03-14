const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const companyRoutes = require('./companyRoutes');
const visitorRoutes = require('./visitorRoutes');

// User Routes
router.use('/apply_job', userRoutes);

// Job Routes 
router.use('/', jobRoutes);

// Company Routes
router.use('/company', companyRoutes);

// Visitor Routes
router.use('/visitors', visitorRoutes);

module.exports = router;