const express = require('express');
const jobController = require('../controllers/job.controller')
const router = express.Router();

router.post('/job', jobController.add_job );
router.get('/job', jobController.all_Jobs );
router.get('/job/:id', jobController.get_job_by_id);


module.exports = router;