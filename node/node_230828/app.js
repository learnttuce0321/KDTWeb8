import ws, { WebSocketServer } from 'ws'
import express, { json } from 'express'

const app = express()
const PORT = 8000
const sockets = []

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

const server = app.listen(PORT, () => {
    console.log('http://localhost:8000')
})


const wss = new WebSocketServer({ server })
// socket => 접속한 브라우저
wss.on('connection', (socket) => {
    console.log('connected client')
    sockets.push(socket)

    socket.on('message', (message) => {
        console.log(message)
        sockets.forEach((elem) => {
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