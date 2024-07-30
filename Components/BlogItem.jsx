import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const BlogItem = ({ title, category, image, description, id, author, date, readTime }) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border-black border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[-7px_7px_0px_#000000] hover:-translate-y-1'>
      <Link href={`/blogs/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className='transition-transform duration-300 hover:scale-105' />
        </div>
      </Link>
      <div className="p-5">
        <p className='mb-2 inline-block px-2 py-1 bg-black text-white text-xs font-semibold rounded'>{category}</p>
        <h5 className='mb-3 text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600'>{title}</h5>
        <p className='mb-4 text-sm text-gray-700 line-clamp-3' dangerouslySetInnerHTML={{__html:description.slice(0,120)}}>
          </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Image src={assets.profile_icon} alt={author} width={24} height={24} className="rounded-full mr-2" />
            <span className="text-sm text-gray-600">{author}</span>
          </div>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <div className="flex items-center justify-between">
          <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 text-sm font-semibold text-blue-600 hover:text-blue-800'>
            Read More <Image src={assets.arrow} alt='' className='ml-2 transition-transform duration-300 group-hover:translate-x-1' width={12} />
          </Link>
          <span className="text-xs text-gray-500">{readTime} min read</span>
        </div>
      </div>
    </div>
  )
}

export default BlogItem