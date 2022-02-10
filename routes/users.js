const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get('/', userController.allUsers);
router.post('/', userController.addUsers);
router.put('/:id', userController.updateUsers);
router.delete('/:id', userController.deleteUsers);

module.exports = router;
