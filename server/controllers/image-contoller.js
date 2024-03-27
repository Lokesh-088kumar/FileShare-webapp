import File from "../models/file.js";
import path from "path";

export const uploadImage = async(req,res)=>{
const fileObj = {
    path:req.file.path,
    name:req.file.originalname,
}
console.log(fileObj);
try {
   const file = await File.create(fileObj);

   res.status(200).json({path : `http://localhost:8000/file/${file._id}`});
} catch (error) {
    console.log(error.message);
    res.status(500).json({error: error.message});
}
};

export const downloadImage = async(req,res) => {
    try {
        const file = await File.findById(req.params.fileId);
        file.downloadContent++;

        await file.save();
        res.download(file.path,file.name);
        //res.download(path.join(__dirname, file.path), file.name);

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error:error.message});
    }
}