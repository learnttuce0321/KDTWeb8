import { commentInfos } from '../model/Comment.js'

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



export { main, comment, comments }