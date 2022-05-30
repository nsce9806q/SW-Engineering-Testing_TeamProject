const passportConfig = require('../middleware/passport');
const passport = require('passport');

module.exports = (app) => {
    passportConfig();
    app.use(passport.initialize());

    return app;
}