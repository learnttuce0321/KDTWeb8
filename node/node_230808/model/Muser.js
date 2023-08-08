import mysql from 'mysql'

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt8'
})

const signupUser = (body, callback) => {
    const sql = `INSERT INTO user (userid, pw, name) VALUES (?,?,?)`

    conn.query(sql, [body.userId, body.userPw, body.nickname], (err, rows) => {
        if (err) {
            callback({ code: 'bad' })
        }
        callback({ code: 'good' })
    })

}
const signinUser = (body, callback) => {
    const sql = `SELECT COUNT(*) AS count, userid FROM user WHERE userid=? AND pw=?`

    conn.query(sql, [body.userId, body.userPw], (err, rows) => {
        if (err) {
            callback({ code: 'bad' })

        }

        console.log(rows)
        console.log('rows: ', { code: 'good', userid: rows[0].userId })

        if (rows[0].count)
            callback({ code: 'good', userid: rows[0].userid })
        else
            callback({ code: 'bad' })
    })
}
const userProfile = (userid, callback) => {
    const sql = `SELECT * FROM user WHERE userid='${userid}'`

    conn.query(sql, (err, rows) => {
        if (err) {
            throw err
        }
        callback(rows)
    })
}
const modifyUser = (body, callback) => {
    let sql = `UPDATE user SET userid=?, pw=?, name=? WHERE id=?`
    console.log(body)

    conn.query(sql, [body.userId, body.userPw, body.nickname, body.id], (err, rows) => {
        if (err) {
            throw err
        }
        console.log(rows)
    })

    sql = `SELECT * FROM user WHERE userid='${body.userId}'`
    console.log(sql)
    conn.query(sql, (err, rows) => {
        if (err) {
            throw err
        }
        // console.log(rows)
        callback(rows)
    })
}
const deleteUser = (body, callback) => {
    const sql = `DELETE FROM user WHERE id=?`

    conn.query(sql, [body.id], (err, rows) => {
        if (err) {
            throw err
        }
        console.log('delete')
    })
}

export { signupUser, signinUser, userProfile, modifyUser, deleteUser }