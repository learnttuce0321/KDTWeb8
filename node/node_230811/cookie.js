import cookieParser from 'cookie-parser'
import express from 'express'
import session from 'express-session'

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// 쿠키파서 미들웨어(일반쿠키)
app.use(cookieParser())
// 쿠키파서 미들웨어(암호화쿠키)
// app.use(cookieParser('abcdef'))
// 쿠키 옵션 객체
const cookieConfig = {
    // httpOnly: 웹서버를 통해서만 쿠키에 접근 가능. 즉, 자바스크립트(document.cookie)에서의 쿠키 접근 차단 
    // maxAge: 쿠키 유효기간(ms)
    // expires: 만료 날짜 지정(GMT)
    // path: 지정한 디렉토리 및 하위 디렉토리에서만 웹서버로 쿠키 전송 가능(deafult: '/')
    // domain: 쿠키가 전송될 도메인 특정 가능(default: 현재도메인)
    // secure: https로 통신하는 경우에만 쿠키 전송 가능
    // signed: 쿠키의 암호화결정(req.signedCookies)
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    // signed: true
}
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

const users = [
    {
        num: 1,
        id: 'kdt8',
        pw: '1234'
    },
    {
        num: 2,
        id: 'kdt9',
        pw: '12345'
    },
    {
        num: 3,
        id: 'kdt10',
        pw: '123456'
    },
    {
        num: 4,
        id: 'kdt11',
        pw: '1234567'
    }
]
//세션 미들웨어
app.use(session(sessionConfig))


app.get('/', (req, res) => {
    console.log(req.cookies.login)
    console.log(req.session.userLoggedIn)
    res.render('main', {
        data: {
            loginResult: true,
            loggedIn: req.cookies.login,
            num: req.session.userLoggedIn,
            users
        }
    })
})
app.get('/setCookie', (req, res) => {

    res.cookie('myCookie', 'myValue', cookieConfig)
    res.send('set Cookie')
})
app.get('/getCookie', (req, res) => {
    res.send(req.signedCookies)
})
app.get('/deleteCookie', (req, res) => {
    res.clearCookie('myCookie', cookieConfig)
    res.send('delete cookiex')
})
app.get('/cookie', (req, res) => {
    res.render('index', { loggedIn: req.cookies.login })
})

app.post('/cookie/practice', (req, res) => {
    const verify = users.filter((user, index) => {
        return user.id === req.body.id && user.pw === req.body.pw
    })
    if (verify.length === 1) {
        res.cookie('login', 'isLoggedInTrue', cookieConfig)
        req.session.userLoggedIn = verify[0].num.toString()
        res.send({ result: true, msg: '쿠키생성완료' })
    } else {
        res.send({ result: false })
    }


})
app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})