import mongoose from "mongoose";

const dbUrl = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@localhost:6000/authflow?authSource=admin`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log(`Database connected....`)
    } catch (err: any) {
        console.log(err.message)
        process.exit(1)
    }
}

export default connectDB;1