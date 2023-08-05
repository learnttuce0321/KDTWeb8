import { getVisitors, postVisitors } from '../model/Visitor.js'

const main = (req, res) => {
    res.render('index')
}
const getVisitor = (req, res) => {
    getVisitors((result) => {
        console.log(result)
        res.render('visitor', { data: result })
    })
}
const postVisitor = (req, res) => {
    postVisitors(req, (result) => {
        console.log('res:', result)
        res.render('visitor', { data: result })
        res.redirect('/')
    })
}

export { main, getVisitor, postVisitor }