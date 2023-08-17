import cookieParser from 'cookie-parser'
import express from 'express'

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


app.get('/', (req, res) => {
    res.render('main')
})
app.get('/setCookie', (req, res) => {

    // req.cookie(쿠키이름, 쿠키값, 옵션객체)
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
    console.log()
    res.render('index', { popup: req.cookies.modal })
})
app.post('/cookie/practice', (req, res) => {
    if (req.body.checked) {
        res.cookie('modal', 'hidden', cookieConfig)
        res.send({ result: true, msg: '쿠키생성완료' })
    }
})
app.listen(PORT, () => {
    console.log(`localhost:${PORT}`)
})