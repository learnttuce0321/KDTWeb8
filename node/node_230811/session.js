import session from 'express-session'
import express from 'express'

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// 세션 옵션 객체
const sessionConfig = {
    // httpOnly: 자바스크립트에서의 세션 접근 차단 
    // secure: https로 통신하는 경우에만 세션 사용 가능
    // secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값(세션 발급 시 사용하는 키)
    // resave: 세션에 수정사항이 생기지 않더라도 모든 요청마다 저장
    // saveUninitialized: 세션 생성시 저장할 내용이 없더라도 생성
    secret: 'mySessionKey',
    resave: false,
    saveUninitialized: true
}
//세션 미들웨어
app.use(session(sessionConfig))

const value = { id: '1234', pw: 'qwer' }

app.get('/', (req, res) => {
    res.render('main')
})
app.get('/name', (req, res) => {
    res.render(req.session.name)
})
app.get('/session', (req, res) => {
    console.log(req.session.userLoggedIn)
    if (req.session.userLoggedIn == undefined) {
        res.render('index2')
    } else {
        res.render('index2', {
            isLoggedIn: req.session.userLoggedIn
        })
    }
})
app.post('/session/practice', (req, res) => {
    console.log(req.body.loggedIn)
    if (req.body.id === value.id && req.body.pw === value.pw) {
        console.log('성공')
        req.session.userLoggedIn = req.body.id
        res.send('로그인성공')
    } else {
        res.send('로그인 실패')
    }
})

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})