import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const navLinks = [
  {
    id: 1,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    title: 'Properties',
    link: '/properties'
  },
  {
    id: 3,
    title: 'About Us',
    link: '/about'
  },
  {
    id: 4,
    title: 'Contact',
    link: '/contact'
  }
]

const Footer = () => {
  return (
    <footer className='bg-[#052853] w-full min-h-[250px] text-white flex flex-row items-center justify-evenly'>
      <div className='py-3 flex flex-col justify-evenly gap-4'>
        <ul className='flex flex-col items-center'>
          <li className='font-bold text-xl'>Harmonford Estates</li>
          <li className='mt-2 self-start'>Suite 4, Meadows Business Park,</li>
          <li className='self-start'>38 Brookside Avenue,</li>
          <li className='self-start'>Harmonford, HF3 7BJ,</li>
          <li className='mt-2'><span className='font-bold'>Email:</span> info@harmonfordestates.co.uk</li>
          <li className='self-start'><span className='font-bold'>Tel:</span> 01632 960123</li>
        </ul>

        <ul className='flex flex-row justify-evenly'>
          <li className='cursor-pointer'><FaFacebookF size={30} className='hover:fill-[#EDB522] transition-all ease-in-out'/></li>
          <li className='cursor-pointer'><FaInstagram size={30} className='hover:fill-[#EDB522] transition-all ease-in-out'/></li>
          <li className='cursor-pointer'><FaXTwitter size={30} className='hover:fill-[#EDB522] transition-all ease-in-out'/></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer