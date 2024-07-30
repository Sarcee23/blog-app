import mongoose from "mongoose";
export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://src:23022004@cluster0.rn4e3ix.mongodb.net/blog-app')
    console.log("DB Connected");
}