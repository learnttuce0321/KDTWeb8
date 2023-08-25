import mysql from 'mysql'

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt8'
})
const connmul = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt8',
    port: 3305,
    connectionLimit: 30,
})
const dbSignUp = (user, cb) => {
    const sql = 'insert into user (userid, pw, name) values (?, ?, ?)'
    conn.query(sql, [user.id, user.pw, user.name], (error, rows) => {
        if (error) {
            throw error
        }
        cb()
    })
}
const dbSignIn = (user, cb) => {
    let sql = 'select * from user where userid = ? and pw = ?'
    conn.query(sql, [user.id, user.pw], (error, rows) => {
        if (error) {
            throw error
        }
        cb(rows)
    })
}
const dbModify = (user, cb) => {
    let sql = 'update user set userid = ?, pw = ?, name = ? where id = ?'
    conn.query(sql, [user.id, user.pw, user.name, user.num], (error, rows) => {
        if (error) {
            throw error
        }
        cb()
    })
}
const dbLoggedIn = (user, cb) => {
    let sql = 'select * from user where id = ?'

    conn.query(sql, [user.num], (error, rows) => {
        if (error) {
            throw error
        }
        cb(rows)
    })
}
export { dbSignUp, dbSignIn, dbModify, dbLoggedIn }