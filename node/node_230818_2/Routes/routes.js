import express from 'express'
import { mainPage, loginPage, signinPage, signinUserData, loginUserData, loginUserByToken } from '../Controller/CUser.js'
const router = express.Router()

router.get('/', mainPage)
router.get('/login', loginPage)
router.get('/signin', signinPage)
router.post('/signin', signinUserData)
router.post('/login', loginUserData)
router.post('/verify', loginUserByToken)
export default router