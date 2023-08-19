import express from 'express';
import jwt from "jsonwebtoken";

const app = express()
const PORT = 8000
const SECRET = 'secretKey'

const userInfo = {
    id: 'kdt8',
    pw: '1234',
    name: '주상후'
}

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.post('/login', (req, res) => {
//     const { id } = req.body;
//     const token = jwt.sign({ id }, SECRET)
//     res.send({
//         result: true,
//         token
//     })
// })

// app.post('/verify', (req, res) => {
//     const auth = req.headers.authorization
//     const token = auth.split(' ')

//     if (token[0] === 'Bearer') {
//         jwt.verify(token[1], SECRET, (err, decoded) => {
//             if (err) {
//                 return res.status(403).send({ result: false, message: '인증에 실패하였습니다.' })
//             }
//             return res.send({ result: true, message: decoded })
//         })
//     } else {
//         req.send({ result: false, message: '올바른 인증방식이 아닙니다.' })
//     }
// })

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/login', (req, res) => {
    const { id, pw } = req.body
    if (id === userInfo.id && pw === userInfo.pw) {
        const token = jwt.sign({ id, pw }, SECRET)
        res.send({
            result: true,
            token,
            userInfo
        })

        return
    }
    res.send({
        result: false,
        message: '로그인에 실패하였습니다.'
    })

})

app.post('/verify', (req, res) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')

        if (token[0] === 'Bearer') {
            const rsult = jwt.verify(token[1], SECRET, (err, decoded) => {
                if (err) {
                    return res.status(403).send({ result: false, message: '인증에 실패하였습니다.' })
                }
                return res.send({ result: true, userInfo })
            })
        } else {
            req.send({ result: false, message: '올바른 인증방식이 아닙니다.' })
        }
    } else {
        res.redirect('/')
    }
})

app.listen(PORT, () => {

})