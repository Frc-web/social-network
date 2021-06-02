const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const bioCtrl = require('../controllers/bio');

router.get('/', auth, bioCtrl.getBio);

module.exports = router;