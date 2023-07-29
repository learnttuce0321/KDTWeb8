import express from 'express'
import ejs from 'ejs'
import path from 'path'

const APP = express()
const __dirname = path.resolve()
const PORT = 8000

//뷰 엔진 세팅
APP.set('view engine', 'ejs')
APP.set('views', './views')

// APP.use('./public', express.static('public/css'))
APP.use(express.static('public'))
// APP.use('/public', express.static(path.join(__dirname, 'public')))
console.log(express.static('public'))
APP.get('/', (req, res) => {
    res.render('test', {data: [1,2,3,4,5,6,7,8,9]})
})


APP.get('/health', (req, res) => {
    res.render('health')
})
APP.get('/exercise', (req, res) => {
    res.render('exercise')
})
APP.get('/pill', (req, res) => {
    res.render('pill')
})

APP.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

// console.log(express)