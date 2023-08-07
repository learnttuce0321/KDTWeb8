import express from 'express'
import { main, getVisitor, postVisitor, deleteVisitor, getInfoForEdit, editVisitor, getOneVisitor } from '../controller/Cvisitor.js'

const router = express.Router()

router.get('/', main)
router.get('/visitor', getVisitor)
router.post('/visitor/write', postVisitor)
router.delete('/visitor/delete', deleteVisitor)
router.get('/visitor/edit', getInfoForEdit)
router.patch('/visitor/edit', editVisitor)
router.get('/visitor/get/:id', getOneVisitor)

export default router