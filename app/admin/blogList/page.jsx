'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Page = () => {
  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () =>{
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
  }

  const deleteBlog = async(mongoId)=>{
    const response = await axios.delete('/api/blog',{
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs();
  }
  useEffect(()=>{
    fetchBlogs()
  },[])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Blogs</h1>
      <div className="relative max-w-[950px] overflow-hidden mt-4 border border-gray-300 rounded-lg shadow-md">
        <div className="overflow-x-auto max-h-[70vh] scrollbar-hide">
          <table className='w-full text-sm text-gray-600'>
            <thead className='text-sm text-gray-700 uppercase bg-gray-100 sticky top-0'>
              <tr>
                <th scope='col' className='px-6 py-4 text-left font-semibold'>
                  Author
                </th>
                <th scope='col' className='px-6 py-4 text-left font-semibold'>
                  Blog Title
                </th>
                <th scope='col' className='px-6 py-4 text-left font-semibold'>
                  Date
                </th>
                <th scope='col' className='px-6 py-4 text-left font-semibold'>
                  Action 
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {blogs.map((item,index)=>{
                return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} date = {item.date} authorImg={item.authorImg} deleteBlog={deleteBlog}/>
              })}
    
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Page