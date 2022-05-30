const passport = require('passport');
const bcrypt = require('bcryptjs');
const DB = require('../../model');

module.exports = (req,res,next) => {
    const { email, password, username } = req.body;

    // 비밀번호 hash암호화
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    // DB에 회원 정보 insert
    DB.User.create({
        email,
        password: hash,
        username
    }).catch((e) => {
        console.error(e);
        return next(e);
    });

    res.status(201).json({ result: "회원 가입 완료"});
}