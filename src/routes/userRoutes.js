const express = require('express');
// const Recent_Applied = require('../models/clientModel')
const userJobApply = require('../controllers/user.controller')
const router = express.Router()

router.post('/form', userJobApply.applyForJob );


module.exports = router;