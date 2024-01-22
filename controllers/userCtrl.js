import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
   const { name, email, password } = req.body
   try {
      const find = await User.findOne({ email })
      if (find) return res.status(400).json({ msg: 'User existed' })
      const hashedPass = await bcrypt.hash(password, 12)
      const reg = await User.create({ name, email, password: hashedPass })
      res.json(reg)
   } catch (error) {
      return res.status(500).json({ msg: error.message })
   }
}
export const login = async (req, res) => {
   const { email, password } = req.body
   try {
      const user = await User.findOne({ email })
      console.log(user);
      if (!user) return res.status(400).json({ msg: 'Username not exist' })
      const comparedPassword = await bcrypt.compare(password, user.password)
      console.log(comparedPassword);
      if (!comparedPassword) return res.status(400).json({ msg: 'Invalid credentals' })
      const token = jwt.sign({ userId: user._id, email }, process.env.JWT_TOKEN, { expiresIn: "2m" })
      user.token = token
      user.password = ""
      res.json(user)
   } catch (err) {
      throw new Error(err)
   }
}

export const getUsers = async (req, res) => {
   try {
      // const allUsers = await User.deleteMany()
      const allUsers = await User.find()
      res.json(allUsers)
   } catch (error) {
      throw new Error(err)
   }
}

export const favorite = async (req, res) => {
   console.log('you touched it');
   try {
      const { userId, productId } = req.body
      const foundUser = await User.findOne({ _id: userId })
      let alreadyExist = foundUser.list.find(ev => {
         return ev === productId
      })
      if (alreadyExist) {
         console.log('exist');
         const del = await User.findByIdAndUpdate(userId, { $pull: { list: productId  } }, { new: true })
         res.json(del)
      } else {
         console.log('exist not');
         const add = await User.findByIdAndUpdate(userId, { $push: { list: productId} }, { new: true })
         res.json(add)
      }
   } catch (error) {
      throw new Error(error)
   }
}

export const addToUserCart = async (req, res) => {
   try {
      const { userId, productId } = req.body
      const foundUser = await User.findOne({ _id: userId })
      let alreadyExist = foundUser.cart.find(ev => {
         return ev.pId === productId
      })
      if (alreadyExist) {
         const update = await User.findByIdAndUpdate(userId, { cart: { productId, quantity: alreadyExist.quantity += 1 } }, { new: true })
         res.json(update)
      } else {
         const add = await User.findByIdAndUpdate(userId, { $push: { cart: { productId, quantity: 1 } } }, { new: true })
         res.json(add)
      }
   } catch (error) {
      throw new Error(error)
   }
}




export default { register, login, favorite, getUsers, addToUserCart }

// const foundUser = await User.findOne({ _id: userId})
// const alreadyExist = foundUser.cart.some(ev => {
// return ev === productId
// })
// if(alreadyExist){
// const updateProduct = await User.findByIdAndUpdate(userId, {$push: {cart: productId}}, {new: true})
// const updateProduct = await User.findByIdAndUpdate(userId, {$push: {cart: productId}}, {new: true})
// }
// const addCart = await User.findByIdAndUpdate(userId, {$push: {cart: productId}}, {new: true})
// console.log(addCart);


// const foundUser = await User.findOne({ _id: userId })
// let alreadyExist = foundUser.cart.find(ev => {
//    return ev.pId === productId
// })
// if (alreadyExist) {
//   alreadyExist = alreadyExist.quantity += 1
//   let update = await User.updateOne(userId, {cart: })
//   console.log('update', update);
// }else{
//    const add = await User.findByIdAndUpdate(userId, { $push: { cart: { pId: productId, quantity: 1 } } }, { new: true })
//    console.log(add,'add');
// }