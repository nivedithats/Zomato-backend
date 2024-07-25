const express = require('express');
const { registerUser, allUsers, login, validateToken } = require('../controllers/user');
const authenticatetoken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/user/register', registerUser)
router.get('/users/list', allUsers)
router.post('/user/login', login)
router.post('/validateToken', authenticatetoken, validateToken)

module.exports= router;