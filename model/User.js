const User = ( Sequelize, DataTypes )=>{
    return Sequelize.define(
    "user",
    {
        id: {
            type :  DataTypes.STRING(10),       
            allowNull : false,   //not null
            primaryKey: true   //pk이므로 언급 
         },
        pw : { //name varchar(10) not null  
            type: DataTypes.STRING(10), //str 10글자 == varchar 
            allowNull: false
            // primarykey: 이 둘은 기본값이 false이므로 작성하지 않아도 된다 
            // autoIncrement 
        },
        name : { //comment mediumtext
            type: DataTypes.STRING(10), //str 10글자 == varchar 
            allowNull: false
        }
    },
    {
        tableName: "user", // select * from vistor을 >  select * from vistors로 만들어버린다. 
        freezeTableName: true, //시퀄라이즈는 기본으로 테이블을 복수형으로 만들려고 한다는 특징이 있다. 이걸 방지하겠다는 의미
        timestamps: false
    }
    )
}

module.exports = User;
// exports.post_signup = (data, cb) => {
//     let sql = `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`;
//     cnn.query( sql, function(err){
//         if ( err ) throw err;
//         cb();
//     });
// }

// exports.post_signin = (id, pw, cb) => {
//     let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }
// exports.get_user = (id, cb) => {
//     let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
//     cnn.query( sql, function(err, rows){
//         if ( err ) throw err;
//         cb(rows);
//     });
// }

// exports.update_profile = (data, cb) => {
//     let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
//     cnn.query( sql, ( err ) => {
//         if ( err ) throw err;
//         cb();
//     })

// }
// exports.delete_user = (id, cb) => {
//     cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
//         if ( err ) throw err;
//         cb();
//     });
// }