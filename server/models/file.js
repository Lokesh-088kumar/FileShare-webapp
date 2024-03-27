import mongoose from "mongoose";

const fileSChema = new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    downloadContent:{
        type:Number,
        required:true,
        default:0,
    }
});

const File = mongoose.model('file',fileSChema);

export default File;