const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

let db = {};

dbConfig = {
    database: 'SW_Engineering_Testing',
    username: 'swet_sequelize',
    password: 'pass1234!'
}

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: 'multipurposedb.cab9qm2hc3qt.ap-northeast-2.rds.amazonaws.com',
        dialect: 'mysql',
        port: '3306'
    }
);

fs.readdirSync(__dirname+'').filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach((file) => {

    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

//DB에 모델이름을 연결한다.
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
  
db.sequelize = sequelize;
console.log(db.User);

module.exports = db;