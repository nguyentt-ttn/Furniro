import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/ReactJsxFW2",{
            useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000
        })
        
        console.log("connect db success")
    } catch (error) {
        console.log(error)
    }
}