import { signinUser, loginUser, loginByToken } from '../Model/MUser.js'
const mainPage = (req, res) => {
    res.render('index')
}
const loginPage = (req, res) => {
    res.render('login')
}
const signinPage = (req, res) => {
    res.render('signin')
}
const signinUserData = (req, res) => {
    console.log(req.body)
    signinUser(req.body, (result) => {

        if (result.code === 'good') {
            res.redirect('/login')
        }
    })
}
const loginUserData = (req, res) => {
    loginUser(req.body, (result) => {

        if (result.code === 'good') {
            console.log(result)
            res.send(result)
        }
    })

}
const loginUserByToken = (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    loginByToken(token, (result) => {
        res.send(result)
    })
}
export { mainPage, loginPage, signinPage, signinUserData, loginUserData, loginUserByToken }