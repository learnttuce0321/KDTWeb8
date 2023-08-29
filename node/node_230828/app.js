import ws, { WebSocketServer } from 'ws'
import express from 'express'
import http from 'http'

const app = express()
const PORT = 8000
const sockets = []
const server = http.createServer(app)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

const wss = new WebSocketServer({ server })
// socket => 접속한 브라우저
wss.on('connection', (socket) => {
    console.log('connected client')
    sockets.push(socket)

    socket.on('message', (message) => {
        // 클라이언트와 서버간의 데이터를 주고 받을 때는 일반적으로 문자열 도는 버퍼 형태로 전달됨
        // 서버가  모두 다른 환경이기 때문에 객체를 전달할 때는 객체를 이련의 바이트로 변환하느 직렬화 과정이 필요함
        console.log(message)
        wss.clients.forEach((elem) => {
            elem.send(`${message}`)
        })
        console.log('send!')
    })

    socket.on('error', (err) => {
        console.log(`occured error: ${err}`)
    })

    socket.on('close', () => {
        console.log('disabled connetion to client')
    })
})

server.listen(PORT, () => {
    console.log('http://localhost:8000')
})

