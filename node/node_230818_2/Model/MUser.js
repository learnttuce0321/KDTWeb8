import mysql from 'mysql'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const salt = 10
const SECRET = 'secretKey'

const bcryptPassword = (password) => {
    return bcrypt.hashSync(password, salt)
}
const bcryptCompare = (password, dbPassword) => {
    return bcrypt.compare(password, dbPassword)
}

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt8'
})

const signinUser = (body, callback) => {
    const sql = `insert into user (userid, pw, name) values (?, ?, ?)`
    const bcryptPw = bcryptPassword(body.pw)
    console.log(bcryptPw)

    conn.query(sql, [body.id, bcryptPw, body.name], (err, rows) => {
        if (err) {
            throw err
        }
        return callback({ code: 'good' })
    })
}
const loginUser = async (body, callback) => {
    let dbPw = ''

    let sql = `select * from user where userid = '${body.id}'`
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err
        }
        dbPw = rows[0].pw
    })

    if (bcryptCompare(body.pw, dbPw)) {
        const token = jwt.sign({ id: body.id }, SECRET)
        callback({ code: 'good', token })
    }
}

const loginByToken = (token, callback) => {
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            throw err
        }
        callback({ code: 'good', data: decoded })
    })
}

export { signinUser, loginUser, loginByToken }