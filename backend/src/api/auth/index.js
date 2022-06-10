const express = require('express');
const router = express.Router();
const validator = require('../../middleware/validator');
const login = require('../../service/auth/login');
const register = require('../../service/auth/register');
const checkLogin = require('../../middleware/passport/jwtAuthentication');

router
    .post('/login', validator.auth.login, login)
    .post('/register', validator.auth.register, register)
    .get('login_test', checkLogin, (req, res, next) => {
        res.send("로그인 확인");
    });

module.exports = router;