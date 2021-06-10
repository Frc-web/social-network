const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const authCtrl = require('../controllers/auth');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

router.put('/:id', auth, userCtrl.modifyUser);
router.delete('/:id', auth, userCtrl.deleteUser);
router.get('/', auth, userCtrl.getAllUsers);
router.get('/:id', auth, userCtrl.getOneUser);

module.exports = router;