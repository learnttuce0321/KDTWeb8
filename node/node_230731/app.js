import express from 'express'

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/getForm', (req, res) => {
    console.log(req.query)
    res.render('form_get',{
        userInfo: req.query
    })
})
app.post('/postForm', (req,res) => {
    console.log(req.body)
    res.render('form_post', {
        userInfo: req.body
    })
})

// 첫번째 실습
app.get('/formGet',(req, res) => {
    console.log(req.query)
    res.render('formGet',{
        userInfo: req.query
    })
})
// 두번째 실습
app.post('/formPost',(req, res) => {
    res.render('formPost', {
        userInfo: req.body
    })
})




app.listen(PORT, () => {
    console.log(PORT)
})




    
    