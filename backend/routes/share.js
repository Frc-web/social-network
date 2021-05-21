const express = require('express');
const router = express.Router();

const shareCtrl = require('../controllers/share');
const auth = require('../middleware/auth');

router.post('/', auth, shareCtrl.createShare);
router.get('/', auth, shareCtrl.getShare);

module.exports = router;
