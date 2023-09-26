import mongoose from "mongoose";

const URI =   "mongodb+srv://ibrahimdoba55:ibrahim123@authdb.kuauwfm.mongodb.net/AuthDB?retryWrites=true&w=majority";

export const connectMongoDb = async () => {
    if(mongoose.connect.length > 1) {
        return mongoose.connection.asPromise()
    }
    return await mongoose.connect(URI)
}