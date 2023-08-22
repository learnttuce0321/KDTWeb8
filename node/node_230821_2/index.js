const express = require('express');
const app = express();
const PORT = 8000;

const userInfo = { id: 'kdt8', pw: '1234' };

//body-parser
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

//router
app.get('/', (req, res) => {
    res.render('index');
});
//post실습
app.get('/axiosPost', (req, res) => {
    res.render('post');
});
app.post('/resultPost', (req, res) => {
    const { id, pw } = req.body

    if (id === userInfo.id && pw === userInfo.pw) {
        res.send({ result: true })
    } else {
        res.send({ result: false })
    }
});

//server start
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
