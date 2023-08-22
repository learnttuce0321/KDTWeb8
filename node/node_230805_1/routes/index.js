import express from 'express'
import { main, comment, comments, add } from '../controller/Cmain.js'

const router = express.Router()

router.get('/', main) // GET
router.get('/comment/:id', comment) // GET /comment/:id
router.get('/comments', comments) // GET /comments
router.post('/addUser', add)

export default router