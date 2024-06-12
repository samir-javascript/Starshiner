import mongoose from "mongoose"
export const connectToDb = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!, {
            dbName: "starshiners_app"
        })
        console.log("mongo db has been connected successfuly")
    } catch (error) {
        console.log(error, "failed to connect to db")
    }
}