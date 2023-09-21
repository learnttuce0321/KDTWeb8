import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const PORT = 8000;
// http 서버
const server = http.createServer(app);
// socket 서버
const io = new Server(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index2');
});
app.get('/chat', (req, res) => {
    res.render('chat');
});

io.on('connection', (socket) => {
    //기본 소켓
    socket.on('new_message', (arg) => {
        console.log(arg);
        // cb(arg)
    });
    socket.on('client_message', (arg) => {
        console.log(arg);
        socket.emit('server_message', arg);
    });

    //채팅 소켓
    socket.on('join', (username) => {
        socket.join('chatRoom');
        // 특정 그룹 모두에게 메세지 전달
        io.to('chatRoom').emit('userjoin', `${username}님이 접속하였습니다.`);
        // 자신을 제외한 특정 그룹 모두에게 메세지 전달
        socket.broadcast
            .to('chatRoom')
            .emit('userjoin', `${username}님이 접속하였습니다.`);
    });
    socket.on('message', (data) => {
        console.log(socket.id);
        console.log(io.sockets.adapter.rooms);
        io.to('chatRoom').emit('usermessage', data);
    });

    //practice1
    socket.on('practice1', (arg) => {
        console.log('client: ', arg);
    });
});

server.listen(PORT, () => {
    console.log('http://localhost:8000');
});
