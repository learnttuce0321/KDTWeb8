import mysql from 'mysql'

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt8'
})

const getVisitors = (callback) => {
    const sql = 'SELECT * from visitor'
    conn.query(sql, (err, rows) => {
        if (err)
            throw err

        callback(rows)
    })
}
const postVisitors = (req, callback) => {
    let sql = `INSERT INTO visitor (name, content) VALUES ('${req.body.name}', '${req.body.content}');`
    conn.query(sql, (err, rows) => {
        if (err)
            throw err
    })

    console.log(req.body)
    sql = 'select * from visitor'
    conn.query(sql, (err, rows) => {
        if (err)
            throw err

        callback(rows)
    })
}

export { getVisitors, postVisitors }
