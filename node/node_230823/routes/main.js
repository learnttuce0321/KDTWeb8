import express from 'express'
import { main, postSignUp, postSignIn, signIn, signUp, postModify, postLoggedIn } from '../controller/Cmain.js'
const router = express.Router();

router.get('/', main);
router.get('/signIn', signIn)
router.get('/signUp', signUp)
router.post('/signUp', postSignUp)
router.post('/signIn', postSignIn)
router.post('/modify', postModify)
router.post('/loggedIn', postLoggedIn)

export default router
