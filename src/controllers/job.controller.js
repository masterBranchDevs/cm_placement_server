const Job = require('../models/jobModel');
const config = require('../config/config');

const ENVIRONMENT = config.nodeEnv || 'development';

// Logger function
const log = (message, data = '') => {
    if (ENVIRONMENT !== 'production') {
        console.log(message, data);
    }
};

// Job Controllers
const all_Jobs = async (req, res) => {
    log("[all_Jobs] Fetching all jobs");
    try {
        const jobs = await Job.find().sort({ _id: -1 });
        log(`[all_Jobs] Found ${jobs.length} jobs`);
        res.json(jobs);
    } catch (error) {
        console.error("[all_Jobs] Error: ", error);
        res.status(500).json({ message: error.message });
    }
};

const add_job = async (req, res) => {
    log("[add_job] Request body: ", req.body);
    try {
        const { jobTitle, position } = req.body;
        const newJob = new Job({ jobTitle, position, created_at: new Date().toISOString() });
        await newJob.save();
        log("[add_job] New job added: ", newJob);
        res.json(newJob);
    } catch (error) {
        console.error("[add_job] Error: ", error);
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
};

const get_job_by_id = async (req, res) => {
    log(`[get_job_by_id] Fetching job with ID: ${req.params.id}`);
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            log(`[get_job_by_id] Job not found: ${req.params.id}`);
            return res.status(404).json({ message: "Job not found" });
        }
        log("[get_job_by_id] Job found: ", job);
        res.json(job);
    } catch (error) {
        console.error("[get_job_by_id] Error: ", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { all_Jobs, add_job, get_job_by_id };
