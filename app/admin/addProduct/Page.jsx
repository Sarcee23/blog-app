'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Jadon Sancho",
    authorImg: "/authorImg.png"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data);
  }

  const onImageChange = (event) => {
    setImage(event.target.files[0]);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/blog', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Jadon Sancho",
          authorImg: "/author_img.png"
        })
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Error submitting the form");
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-semibold text-gray-900 mb-8">Create New Blog Post</h1>
          <form className="space-y-6" onSubmit={onSubmitHandler}>
            <div>
              <label htmlFor="image" className="block text-xl font-medium text-gray-700 mb-2">
                Upload Thumbnail
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-gray-400 transition-all duration-300">
                <div className="space-y-1 text-center">
                  {!image ? (
                    <>
                      <Image className="mx-auto h-24 w-24 text-gray-400" src={assets.upload_area} width={140} height={70} alt='' />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input id="image" name="image" type="file" className="sr-only" onChange={onImageChange} required />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  ) : (
                    <Image src={URL.createObjectURL(image)} width={200} height={200} alt="Thumbnail preview" className="object-cover rounded-lg" />
                  )}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="title" className="block text-xl font-medium text-gray-700 mb-2">
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                onChange={onChangeHandler}
                value={data.title}
                id="title"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your blog title"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-xl font-medium text-gray-700 mb-2">
                Blog Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={onChangeHandler}
                value={data.description}
                rows={6}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Type your blog content here"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="category" className="block text-xl font-medium text-gray-700 mb-2">
                Blog Category
              </label>
              <select
                id="category"
                name="category"
                onChange={onChangeHandler}
                value={data.category}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              >
                Add Blog Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Page
