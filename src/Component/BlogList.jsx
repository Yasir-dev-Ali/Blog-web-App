import React from 'react'
// json file import
import blogPosts from "../Component/Blog.json"



const BlogList = () => {
  return (
    <>
    <div className="container mx-auto p-4">
        <div className="flex justify-center items-center">
            <div className="w-1/2">
                <h1 className="text-4xl font-bold text-gray-800">Blog List</h1>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quae.</p>
            </div>
        </div>
    </div>
    <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
            {blogPosts.map((blog, index) => (
                <div key={index} className="bg-white p-4  rounded-lg shadow-lg">
                    <img src={blog.image} alt={blog.title} className="w-full h-32 object-cover rounded-lg" />
                    <h1 className="text-xl font-bold text-gray-800 mt-4">{blog.title}</h1>
                    <p className="text-gray-600">{blog.content}</p>
                    <p className="text-gray-600">{blog.published}</p>
                    <p className="text-gray-600"> {blog.author}</p>
                    <div>
                        <a href={blog.link} className="text-blue-600 hover:underline">Read More</a>
                    </div>
                </div>
            ))}
        </div>
    </div>

  

    
    

    </>
  )
}

export default BlogList