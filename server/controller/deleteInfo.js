import mongoose from "mongoose";
import User from "../models/UserDB.js";
export default async function deleteDB(req , res , next) {
const  id  = req.params.id;
if (id.match(/^[0-9a-fA-F]{24}$/)) {
    await  User.findByIdAndRemove(id).exec()
    next()
}

}
