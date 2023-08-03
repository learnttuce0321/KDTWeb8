import express from 'express'

const app = express()
const PORT = 8000;

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.get('/', (req, res) => {
//     res.render('index')
// })
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/ajax', (req, res) => {
    res.send(req.query)
})
app.post('/ajax', (req, res) => {
    res.send(req.body)
})

app.get('/axios', (req, res) => {
    res.send(req.query)
})
app.post('/axios', (req, res) => {
    res.send(req.body)
})

app.get('/fetch', (req, res) => {
    res.send(req.query)
})
app.post('/fetch', (req, res) => {
    res.send(req.body)
})

app.get('/exercise1', (req, res) => {
    res.send(req.query)
})
app.post('/exercise2', (req, res) => {

    console.log(req.body)

    const ID = req.body.userId
    const PW = req.body.userPassword

    var checkEmail = !ID.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)
    var checkNum = PW.search(/[0-9]/g);
    var checkEng = PW.search(/[a-z]/ig);
    var checkSpe = PW.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (ID.length === 0) {
        return res.send({ result: false })
    } else if (checkEmail) {
        return res.send({ result: false })
    }

    if (PW.length < 8 || PW.length > 20) {
        return res.send({ result: false })
    } else if (PW.search(/\s/) != -1) {
        return res.send({ result: false })
    } else if (checkNum < 0 || checkEng < 0 || checkSpe < 0) {
        return res.send({ result: false })
    }

    res.send({
        result: true,
        userInfo: {
            userID: ID,
            userPassword: PW
        }
    })
})

app.listen(PORT, () => {
    console.log('localhost:8000')
})