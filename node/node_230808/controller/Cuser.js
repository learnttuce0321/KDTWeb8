import { signupUser, signinUser, userProfile, modifyUser, deleteUser } from '../model/Muser.js'

const main = (req, res) => {
    res.render('index')
}
const signup = (req, res) => {
    res.render('signup')
}
const signin = (req, res) => {
    res.render('signin', {})
}
const postSignup = (req, res) => {
    signupUser(req.body, (result) => {
        res.send(result)
    })
}
const postProfile = (req, res) => {
    userProfile(req.body.userId, (result) => {
        console.log('123', result)
        res.render('profile', { result })
    })
}
const postSignin = (req, res) => {
    signinUser(req.body, (result) => {
        res.send(result)
    })
}
const modifyProfile = (req, res) => {
    modifyUser(req.body, (result) => {
        console.log('modifyResult:', result)

        res.render('profile', { result })
    })
}
const deleteProfile = (req, res) => {
    deleteUser(req.body)
    res.send()
}

export { main, signup, signin, postSignup, postProfile, postSignin, modifyProfile, deleteProfile }