const express = require('express');
const router = express.Router();
const validator = require('../../middleware/validator');
const login = require('../../service/auth/login');
const register = require('../../service/auth/register');
const checkLogin = require('../../middleware/passport/jwtAuthentication');
const passport = require('passport');

router
    .post('/login', validator.auth.login, login)
    .post('/register', validator.auth.register, register)
    .get('/test', passport.authenticate('jwt', { session: false }), (req, res, next) => {
        res.send("good!");
    });

module.exports = router;