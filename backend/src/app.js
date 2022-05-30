const express = require('express');
const initLoaders = require('./loaders');

const startServer = () => {
    const app = express();

    initLoaders(app);
}

startServer();

/*
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

var options = {
    'jwtFromRequest': ExtractJwt.fromAuthHeaderAsBearerToken(),
    'secretOrKey': 'secret',
    'issuer': 'accounts.examplesoft.com',
    'audience': 'yoursite.net'
}

passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("pass1234", salt);

console.log(bcrypt.compareSync("pass1234", hash));
console.log(bcrypt.compareSync("not_bacon", hash));
*/