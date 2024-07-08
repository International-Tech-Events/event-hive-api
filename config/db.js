import mongoose from "mongoose";

const connectionString=process.env.mongo_uri

export const dbconnection = async() => {
    try{
        await mongoose.connect(connectionString);
        console.log('Database is connected')
    } catch (error) {
        console.log(error);
    }

}
