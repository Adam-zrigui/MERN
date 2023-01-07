import mongoose from "mongoose";
mongoose.set('strictQuery' , true)

const db = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log("database connection established")
    } catch (error) {
        console.error(error);
    }
}

export default db;