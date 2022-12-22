const express = require('express');

const router = express.Router();

const User = require('../controllers/Auth');

const Token = require('../controllers/jsoncontroller')

 router.post('/register',User.Register);
 router.get('/login',User.login);
 router.put('/update',User.update);
 router.delete('/delete',User.delete);

router.post('/token',Token.createsession);

module.exports = router;