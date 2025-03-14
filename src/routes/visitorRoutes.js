const express = require('express');
const { getVisitorCount, incrementVisitorCount } = require('../controllers/visitorController');

const router = express.Router();

router.get('/count', getVisitorCount);
router.post('/increment', incrementVisitorCount);

module.exports = router;