import express from 'express'
import { main, getVisitor, postVisitor } from '../controller/Cvisitor.js'

const router = express.Router()

router.get('/', main)
router.get('/visitor', getVisitor)
router.post('/visitor/write', postVisitor)


export default router