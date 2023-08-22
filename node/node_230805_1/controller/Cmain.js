import { commentInfos, addU } from '../model/Comment.js'

const main = (req, res) => {
    res.render('index')
}

const comment = (req, res) => {
    const commentId = req.params.id
    const comments = commentInfos()

    if (isNaN(commentId))
        return res.render('404')

    else if (commentId < 1 || commentId > comments.length)
        return res.render('404')

    res.render('comment', { commentInfo: comments[commentId - 1] })
}

const comments = (req, res) => {
    res.render('comments', { commentInfos: commentInfos() })
}
const add = (req, res) => {
    const { name, gender, j } = req.body
    addU(name, gender, j, (result) => {
        res.send(result)
    })
}



export { main, comment, comments, add }