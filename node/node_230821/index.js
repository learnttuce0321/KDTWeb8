import express from 'express'
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
//view engine
app.set('view engine', 'ejs');

//router
app.get('/', (req, res) => {
    res.render('index');
});
//get으로 정보 받기
app.get('/getPage', (req, res) => {
    res.render('get');
});
app.get('/resultGet', (req, res) => {
    console.log(req.query)
    res.render('result', req.query)
});
//post로 정보 받기
app.get('/postPage', (req, res) => {
    res.render('post');
});
app.post('/resultPost', (req, res) => {
    //코드 실습
    console.log(req.body)
    res.render('result', req.body)
});

//서버오픈
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
