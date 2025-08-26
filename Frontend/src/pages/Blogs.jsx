import React, { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';



const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:4000" + "/api/blogs/list");
            if (response.data.success) {
                setBlogs(response.data.blogs);
                console.log(blogs);

            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    
    useEffect(()=>{
        fetchBlogs();
    },[blogs])

    return (

        <div className="container mx-auto px-4 py-8 mt-40">
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
    LATEST <span className="text-yellow-500">BLOGS</span>
  </h2>

  {/* Flex Column Layout - Stacked Blogs */}
  <div className="flex flex-col items-center space-y-10">
    {blogs.length > 0 ? (
      blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-3xl"
        >
          {/* Responsive Blog Image */}
          <img
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            src={`http://localhost:4000${blog.image}`}
            alt={blog.name}
          />

          {/* Blog Content */}
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold">{blog.name}</h3>
            <p className="text-gray-700 mt-3 text-lg md:text-xl">{blog.description}</p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 text-2xl">No blogs found.</p>
    )}
  </div>
</div>
    )
}

export default Blogs;