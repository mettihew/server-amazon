import express from 'express'
const router = express.Router()
import {  getProducts, getOneProduct,search , addProducts, getFavorites, getProductsCategory, reviewRating } from '../controllers/productCtrl.js'

router.get('/get', getProducts)
router.post('/get-cat', getProductsCategory)
router.post('/search', search)
router.post('/add', addProducts)
router.post('/get-one/:id', getOneProduct)
router.post('/get-favorites', getFavorites)
router.post('/review', reviewRating)


export default router