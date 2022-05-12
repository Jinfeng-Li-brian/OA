const express = require('express');

const UserController = require('../controllers/User');

const router = express.Router();

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUser);

router.post('/', UserController.postUser);

router.post('/image', UserController.postImage);

router.put('/', UserController.putUser);

router.delete('/:id', UserController.deleteUser);

module.exports = router;