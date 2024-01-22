import express from 'express'
const router = express.Router()
import { register, login, favorite, getUsers, addToUserCart } from '../controllers/userCtrl.js'
import auth from '../middleware/auth.js'

router.post('/register', register)
router.post('/login', login)
// router.post('/favorite', auth, favorite)
router.post('/favorite', favorite)
// router.post('/add-to-cart', auth, addToUserCart)
router.post('/add-to-cart', addToUserCart)

// delete later
router.get('/get', getUsers)


export default router