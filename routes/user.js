const express = require('express');
const { registerUser, allUsers, login } = require('../controllers/user');
const router = express.Router();

router.post('/user/register', registerUser)
router.get('/users/list', allUsers)
router.post('/user/login', login)

module.exports= router;