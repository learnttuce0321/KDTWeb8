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
    res.render('exercise2')
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
    res.send(req.body)
})

app.listen(PORT, () => {
    console.log('localhost:8000')
})