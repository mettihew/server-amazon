import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  token:{
    type: String,
  },
  cart:{
    type: Array,
    default: [],
    required: true
  },
  list:{
    type: Array,
    default: [],
    required: true
  },
})

export default mongoose.model("User", userSchema)