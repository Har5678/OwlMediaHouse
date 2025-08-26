import mongoose from "mongoose";


const blogsSchema=new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    description:{
        type:"String",
        required:true
    },
    image:{
        type:"String",
        required:true
    },
})
const blogsModel=mongoose.model("blogs",blogsSchema);

export default blogsModel;
