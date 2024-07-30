import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({authorImg, title,author,date,deleteBlog,mongoId}) => {
    const BlogDate = new Date(date);
  return (
    <tr className='bg-white border-b hover:bg-gray-50 transition-all duration-200'>
      <td className='py-4 pl-6 pr-3'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full overflow-hidden'>
            <Image 
              src={authorImg || assets.profile_icon} 
              alt="Author"
              width={40}
              height={40}
              className='object-cover w-full h-full'
            />
          </div>
          <div className='hidden sm:block text-sm text-gray-600'>{author?author:"No author"}</div>
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='max-w-xs'>
          <div className='font-medium text-gray-900 truncate'>
            {title || "No Title"}
          </div>
        {/*  <div className='text-sm text-gray-500 truncate'>
            Short description of the blog...
          </div>*/}
        </div>
      </td>
      <td className='px-6 py-4 text-sm text-gray-600'>
        {BlogDate.toDateString()}
      </td>
      <td className='px-6 py-4'>
        <div className='flex gap-2'>
          <button onClick={()=>deleteBlog(mongoId)} className='text-red-500 hover:text-red-800 transition-colors duration-200'>
            Delete
          </button>
          
        </div>
      </td>
    </tr>
  )
}

export default BlogTableItem