module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            comment: "고유번호 UUID",
        },
        email: {
            type: DataTypes.STRING(100),
            validate: {
                isEmail: true,
            },
            unique: true,
            comment: "이메일",
        },
        password: {
            type: DataTypes.STRING(60),
            comment: "비밀번호",
        },
        username: {
            type: DataTypes.STRING(100),
            comment: "닉네임",
        },
        refreshToken: {
            type: DataTypes.STRING(100),
            comment: "Refresh 토큰",
            allowNull: true
        }
    }, {
        charset: "utf8", // 한국어 설정
        collate: "utf8_general_ci", // 한국어 설정
        tableName: "User", // 테이블 이름
        timestamps: true, // createAt & updateAt 활성화
        paranoid: true, // timestamps 가 활성화 되어야 사용 가능 > deleteAt 옵션 on
    });
  
    return User;
  };