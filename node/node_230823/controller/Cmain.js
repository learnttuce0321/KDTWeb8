import { dbSignUp, dbSignIn, dbModify, dbLoggedIn } from '../model/Model.js'

const main = (req, res) => {
    res.render('index')
}
const signUp = (req, res) => {
    res.render('signUpPage')
}
const signIn = (req, res) => {
    res.render('signInPage')
}
const postSignUp = (req, res) => {
    dbSignUp(req.body, () => {
        res.json({ result: true })
    })
}
const postSignIn = (req, res) => {
    dbSignIn(req.body, (result) => {
        if (result.length) {
            res.json({ result: true, data: result[0] })
            return
        }
        res.json({ result: false })
    })
}
const postModify = (req, res) => {
    dbModify(req.body, (result) => {
        res.json({ result: true })
    })

}
const postLoggedIn = (req, res) => {
    console.log(req.body)
    dbLoggedIn(req.body, (result) => {
        if (result.length) {
            res.json({ result: true, data: result[0] })
            return
        }
        res.json({ result: false })
    })
}

export { main, signIn, signUp, postSignIn, postSignUp, postModify, postLoggedIn }
