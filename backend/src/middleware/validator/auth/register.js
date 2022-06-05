const { body } = require('express-validator');
const validatorErrorChecker = require('../validatorErrorChecker');

module.exports = [
    body('email').exists().isEmail(),
    body('password').exists(),
    body('username').exists(),
    validatorErrorChecker
]