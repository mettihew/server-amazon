import express from "express"
const router = express.Router()
import { addToCart, createProduct, getAproduct, getCart, getProducts, updateProduct, deleteFromCart } from "../controllers/productCtrl.js"
import auth from "../middleware/auth.js"
import {fileUpload} from "../middleware/addPhoto.js"

router.post("/product/create", fileUpload.single('image'), createProduct)
router.get("/product/get-all", getProducts)
router.post("/product/get-one", getAproduct)
// router.put("/product/update", updateProduct)
router.post("/product/add-to-cart", auth, addToCart)
router.post("/product/get-cart", auth, getCart)
router.post("/product/del", deleteFromCart)

export default router