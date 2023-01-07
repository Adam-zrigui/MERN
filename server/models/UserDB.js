import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true
},
age: {
    type: Number,
    required: true,
},

skill: {
    type: String,
    required: true,
},
 url: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
 },
 email: {
    type: String,
    required: true,
    unique: true
 },
description:{
type: String,
required: true,
},
discord: String,
linkedIn: {
type: String,
required: true,
unique: true
},
twitter: String,
github: String
}, {timestamps: true})


const User = mongoose.model("User", UserSchema);
export default User;