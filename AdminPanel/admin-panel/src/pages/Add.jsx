import React from 'react'
import { useState } from 'react';
import assets1 from '../assets/assets';
import { toast } from 'react-toastify';
import axios from 'axios';


const Add = () => {
    const [image,setImage]=useState(false);
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");

    const submitHandler= async (e)=>{
        e.preventDefault();
        

        try {
         const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image); // imageFile should be a File object

    
        const response = await axios.post("http://localhost:4000/api/blogs/add", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        
        if(response.data.success){
            toast.success(response.data.message);
            setName("");
            setDescription("");
            setImage(false);
        }else{
            toast.error(response.data.message);
        }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }

    }



    return (
        <form action="" onSubmit={submitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Image</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20' src={!image?assets1.Upload:URL.createObjectURL(image)} alt="" />
                        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image1" hidden />
                    </label>
                </div>
            </div>
            <div className='w-full'>
            <p className='mb-2'>Blog Name</p>
            <input onChange={(e)=>setName(e.target.value)}  value={name} className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Type here' required />
            </div>
            <div className='w-full'>
                <p className='mb-2'>Blog description</p>
                <textarea onChange={(e)=>setDescription(e.target.value)} value={description}  className='w-full max-w-[500px] px-3 py-2 ' type="text" placeholder='Write content here' required />
            </div>
            <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
        </form>
    )
}

export default Add