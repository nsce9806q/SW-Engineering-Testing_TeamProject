const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { ExtractJwt, Strategy: JWTStrategy } = require('passport-jwt');
const bcrypt = require('bcryptjs');
const DB = require('../../model');

const localOptions = { usernameField: 'email', passwordField: 'password' };

const localAuthenticate = async (email, password, done) => {
    try {
        // email로 유저 정보 조회
        const user = await DB.User.findOne({ where: { email: email }});

        if(!user){
            done(null, false, {message: '존재하지 않는 사용자'});
            return;
        }

        // 비밀번호 검증
        const compareResult = await bcrypt.compareSync(password, user.password);

        if (!compareResult){
            done(null, false, { reason: '올바르지 않은 비밀번호 입니다.' });
        }
        
        done(null, user);
        return;
    }catch (error) {
        console.error(error);
        done(error);
    }
};

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret',
};

const jwtAuthenticate = async (jwtPayload, done) => {
    console.log("hi");
    console.log(jwtPayload);
    try {
        done(null, jwtPayload);
        return;
    }
    catch (error){
        console.error(error);
        done(error);
    }
    /*
  try {
		// payload의 id값으로 유저의 데이터 조회
    const user = await User.findOne({ where: { id: jwtPayload.id } });
		// 유저 데이터가 있다면 유저 데이터 객체 전송
    if (user) {
      done(null, user);
      return;
    }
		// 유저 데이터가 없을 경우 에러 표시
    done(null, false, { reason: '올바르지 않은 인증정보 입니다.' });
  } catch (error) {
    console.error(error);
    done(error);
  }
  */
};

module.exports = () => {
  passport.use('local', new LocalStrategy(localOptions, localAuthenticate));
  passport.use('jwt', new JWTStrategy(jwtOptions, jwtAuthenticate));
};