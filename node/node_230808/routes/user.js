import express from 'express'
import { main, signup, signin, postSignup, postProfile, postSignin, modifyProfile, deleteProfile } from '../controller/Cuser.js'

const router = express.Router()

router.get('/', main)
router.get('/signup', signup)
router.get('/signin', signin)
router.post('/signup', postSignup)
router.post('/profile', postProfile)
router.post('/signin', postSignin)
router.post('/profile/modify', modifyProfile)
router.post('/profile/delete', deleteProfile)
export default router