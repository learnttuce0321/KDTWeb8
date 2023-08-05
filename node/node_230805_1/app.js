import express from 'express';
import indexRouter from './routes/index.js'
import path from 'path'

const app = express()
const PORT = 8000
const __dirname = path.resolve()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static('public'))

app.use('/', indexRouter)

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(PORT, () => {
    console.log('Listen https:\\localhost:8000')
})