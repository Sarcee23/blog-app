import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios';

const Header = () => {

  const [email,setEmail] = useState("");

  const onSubmitHandler = async (e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("email",email);
      const response = await axios.post('/api/email',formData);
      if (response.data.success){
        toast.success(response.data.msg);
        setEmail("");
      }
      else{
        toast.error("Error!")
      }
  }
  return (
    <header className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
        <Image src={assets.logo} width={180} height={60} alt='Blog Logo' className='w-[130px] sm:w-auto'/>
        <button className='flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border-2 border-black rounded-lg transition-all duration-300 hover:bg-black hover:text-white'>
          Get Started 
          <Image src={assets.arrow} width={16} height={16} alt='' className='transition-transform duration-300 group-hover:translate-x-1'/>
        </button>
      </div>
      <div className="text-center my-12">
        <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Latest Blogs</h1>
        <p className='mt-6 max-w-[740px] mx-auto text-sm sm:text-base text-gray-600'>
          Discover insightful articles, expert opinions, and trending topics. Stay informed and inspired with our curated content from various fields.
        </p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] mx-auto mt-10 border-2 border-black rounded-lg overflow-hidden'>
          <input 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email" 
            placeholder='Enter your email' 
            className='pl-4 py-3 w-full outline-none'
            aria-label="Email for newsletter"
            
          />
          <button 
            type="submit" 
            className='bg-black text-white py-3 px-6 sm:px-8 transition-colors duration-300 hover:bg-gray-800'
          >
            Subscribe
          </button>
        </form>
      </div>
    </header>
  )
}

export default Header