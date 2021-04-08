const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const authCtrl = require('../controllers/auth');
const userCtrl = require('../controllers/user');

router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

router.put('/:id', userCtrl.modifyUser);
router.delete('/:id', userCtrl.deleteUser);
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getOneUser);

module.exports = router;