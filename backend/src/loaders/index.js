const sequelizeLoader = require('./sequelize');
const passportLoader = require('./passport');
const expressLoader = require('./express');


module.exports = (app) => {
    sequelizeLoader();
    passportLoader(app);
    expressLoader(app);
}