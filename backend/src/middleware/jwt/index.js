const jwt = require('jsonwebtoken');
const DB = require('../../model');

const createAccessToken = (id, username) => {
    return jwt.sign({
        id: id,
        username: username
    }, 'secret', { expiresIn: '1h'});
}

const createRefreshToken = (id, username) => {
    return jwt.sign({
        id: id,
        username: username
    }, 'secret', { expiresIn: '48h'});
}

const issueToken = (id, username) => {
    const accessToken = "Bearer" + createAccessToken(id, username);
    const refreshToken = "Bearer" + createRefreshToken(id, username);

    DB.User.update({refreshToken: refreshToken}, {where: {id: id}});
    
    return { accessToken, refreshToken };
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, 'secret', function(error, decoded) {
            if(error){
                reject(new Error("secret key error"));
            }
            resolve(decoded);
        });
    })
}

module.exports = { issueToken, verifyToken };