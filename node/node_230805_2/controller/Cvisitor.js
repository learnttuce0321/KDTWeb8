import { getVisitors, postVisitors, deleteVisitors, getInfosForEdit, editVisitors } from '../model/Visitor.js'

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
        res.render('visitor', { data: result })
    })

}
const deleteVisitor = (req, res) => {
    deleteVisitors(req, (result) => {
        res.render('visitor', { data: result })
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
        res.render('visitor', { data: result })
    })
}

export { main, getVisitor, postVisitor, deleteVisitor, getInfoForEdit, editVisitor }