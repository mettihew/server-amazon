import mongoose from "mongoose"

export const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    family:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    token: {
        type:String,
    }
}, {timestamps: true})

export default mongoose.model("User", userSchema)
