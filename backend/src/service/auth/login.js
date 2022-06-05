const passport = require('passport');
const { issueToken } = require('../../middleware/jwt')

module.exports = (req,res,next) => {
    try {
        // 아까 local로 등록한 인증과정 실행
        passport.authenticate('local', (passportError, user, info) => {
        // 인증이 실패했거나 유저 데이터가 없다면 에러 발생
			if (passportError || !user) {
				res.status(400).json({ error: info.message });
				console.log("passportError");
				return;
			}
		
			// user데이터를 통해 로그인 진행
			req.login(user, { session: false }, (loginError) => {
				if (loginError) {
					res.send(loginError);
					return;
				}
			});
			
			const token = issueToken(user.id, user.username);
			console.log(token)
			res.status(200).json(token);
        })(req, res);
    } catch (error) {
        console.error(error);
        next(error);
    }
}