import session from 'express-session'
import express from 'express'

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', './views')

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


app.get('/', (req, res) => {
    req.session.name = '홍길동'
    res.render('index')
})
app.get('/name', (req, res) => {
    res.render(req.session.name)
})

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})