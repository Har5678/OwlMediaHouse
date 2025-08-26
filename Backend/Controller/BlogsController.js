import blogsModel from "../Model/BlogsModel.js";


export const addBlogs= async (req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const {name,description}=req.body;

    const image = `/uploads/${req.file.filename}`;

    
    const blogsData={
        name,
        description,
        image
    }
    console.log(blogsData);
    const blog= new blogsModel(blogsData);
    await blog.save();

    res.json({success:true, message:"Blog Added"});
    

}


export const ListBlogs = async (req, res) =>{
    try {
        const blogs= await blogsModel.find({});
        res.json({success:true, blogs});
    } catch (error) {
        console.log(error);
        res.json({success: false, error: error.message})
    }
}