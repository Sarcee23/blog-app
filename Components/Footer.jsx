import { assets } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: assets.facebook_icon, alt: 'Facebook', href: 'https://facebook.com' },
    { icon: assets.twitter_icon, alt: 'Twitter', href: 'https://twitter.com' },
    { icon: assets.googleplus_icon, alt: 'Google Plus', href: 'https://plus.google.com' },
  ]

  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <Image src={assets.logo_light} alt='Blog Logo' width={120} height={40} className='mb-4 md:mb-0'/>
          <p className='text-sm text-center md:text-left'>
            &copy; {currentYear} BloggerApp. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className='transition-opacity duration-300 hover:opacity-80'
              >
                <Image src={link.icon} alt={link.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer