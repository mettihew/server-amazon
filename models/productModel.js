import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  en_name: {
    type: String,
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: Array,
    required: true
  },
  images: {
    title: { type: String, required: true },
    others: { type: Array, required: true },
    special: { type: String, required: false },
  },
  best_seller: {
    type: Boolean,
    default: false
  },
  // description: {
  //   type: Array,
  //   required: true,
  // },
  // capacity: { type: String, required: true },
  // facilities: { type: Array, required: true },
  // floor: { type: String, required: true },
  // drawer: { type: String, required: true },
  // opening_side: { type: String, required: false },

  weight: { type: String, required: true },
  height: { type: String, required: true },
  feature: { type: String, required: true },
  depth: { type: String, required: true },
  index: { type: String, required: true },

  review: {
    type: Array,
    required: false,
    default: [],
  },
  rating: {
    type: Array,
    required: false,
    default: []
  }, 
  quantity: {
    type: Number,
    default: 1,
  }
})

export default mongoose.model('Product', productSchema)