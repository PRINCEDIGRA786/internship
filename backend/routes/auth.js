const express = require('express');
const router = express.Router();
const { createuser, login } = require('../controllers/Usercontroller');


// create user
router.post('/createuser', createuser);

// user login
router.post('/login', login);


module.exports = router