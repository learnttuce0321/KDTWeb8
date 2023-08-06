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

    sql = 'SELECT * FROM visitor'
    conn.query(sql, (err, rows) => {
        if (err)
            throw err

        callback(rows)
    })
}
const deleteVisitors = (req, callback) => {
    let sql = `DELETE FROM visitor WHERE id = ${req.body.id}`
    conn.query(sql, (err, rows) => {
        if (err)
            throw err

        callback(rows)
    })
}
const getInfosForEdit = (req, callback) => {
    let sql = `SELECT name, content FROM visitor WHERE id = ${req.query.id}`
    console.log(sql)
    conn.query(sql, (err, rows) => {
        if (err)
            throw err
        callback(rows)
    })
}
const editVisitors = (req, callback) => {
    let sql = `UPDATE visitor set name='${req.body.name}', content='${req.body.content}' WHERE id = ${req.body.id}`
    console.log('edit', sql)
    conn.query(sql, (err, rows) => {
        if (err)
            throw err
    })

    sql = `SELECT * FROM visitor`
    conn.query(sql, (err, rows) => {
        if (err)
            throw err

        callback(rows)
    })
}

export { getVisitors, postVisitors, deleteVisitors, getInfosForEdit, editVisitors }

