const Sequelize = require("sequelize");
//db 정보를 적은 config 불러오기
const config = require("../config/config.json")["development"]; // json파일도 require로 불러올 수 있다.


const db = {};

const sequelize = new Sequelize( //이 안에는 4개의 인자가 들어간다. -- 일반 함수 실행의 형태이다. 
    config.database,
    config.username,
    config.password,
    config //DB 전체정보 넣기 이렇게 쓰는게 규칙이다. 
);

db.sequelize = sequelize;
db.Sequelize = sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

module.exports = db; 