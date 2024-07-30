import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  const navItems = [
    { href: '/admin/addProduct', icon: assets.add_icon, label: 'Add Blogs' },
    { href: '/admin/blogList', icon: assets.blog_icon, label: 'Blog List' },
    { href: '/admin/subscriptions', icon: assets.email_icon, label: 'Subscriptions' },
  ];

  return (
    <div className='flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 h-screen border-r border-gray-300'>
      <div className="px-4 sm:px-6 py-6 border-b border-gray-300">
        <Image src={assets.logo} width={120} height={40} alt='Logo' className='w-auto h-8' />
      </div>
      <nav className='flex-grow py-8 px-4 sm:px-6'>
        <ul className='space-y-4'>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.href} 
                className='flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md group'
              >
                <div className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-blue-100 transition-colors duration-300'>
                  <Image src={item.icon} alt='' width={24} height={24} className='opacity-70 group-hover:opacity-100' />
                </div>
                <span className='font-medium text-gray-700 group-hover:text-blue-600'>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='px-4 sm:px-6 py-6 border-t border-gray-300'>
        <p className='text-sm text-gray-500'>© 2024 Blogger</p>
      </div>
    </div>
  )
}

export default Sidebar