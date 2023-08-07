import { getVisitors, postVisitors, deleteVisitors, getInfosForEdit, editVisitors, getOneVisitorInfo } from '../model/Visitor.js'

const main = (req, res) => {
    res.render('index')
}
const getVisitor = (req, res) => {
    getVisitors((result) => {
        res.render('visitor', { data: result })
    })
}
const postVisitor = (req, res) => {
    postVisitors(req, (result) => {
        res.send({ data: result })
    })

}
const deleteVisitor = (req, res) => {
    deleteVisitors(req, (result) => {
        res.send({ data: result })
    })
}
const getInfoForEdit = (req, res) => {
    getInfosForEdit(req, (result) => {
        res.send({ data: result })
    })
}
const editVisitor = (req, res) => {
    console.log('modify!')
    editVisitors(req, (result) => {
        res.send({ data: result })
    })
}
const getOneVisitor = (req, res) => {
    if (isNaN(req.params.id))
        res.render('404')

    getOneVisitorInfo(req, (result) => {
        if (!result[0])
            res.render('404')
        res.render('watchingVisitor', { data: result[0] })
    })
}

export { main, getVisitor, postVisitor, deleteVisitor, getInfoForEdit, editVisitor, getOneVisitor }