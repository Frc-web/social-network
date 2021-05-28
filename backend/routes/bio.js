const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const bioCtrl = require('../controllers/bio');

router.get('/', bioCtrl.getBio);

module.exports = router;