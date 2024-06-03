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
    <footer className='bg-[#052853] w-full h-[200px] text-white flex flex-row justify-evenly'>
      <div>
        <ul>
          <li className='font-bold text-xl'>Harmonford Estates</li>
          <li className='mt-2'>Suite 4, Meadows Business Park,</li>
          <li>38 Brookside Avenue,</li>
          <li>Harmonford, HF3 7BJ,</li>
          <li className='mt-2'><span className='font-bold'>Email:</span> info@harmonfordestates.co.uk</li>
          <li><span className='font-bold'>Tel:</span> 01632 960123</li>
        </ul>
      </div>

      <div className='flex flex-col items-center justify-evenly'>

        <ul className='flex flex-col'>
          {navLinks.map(item => (
            <Link key={item.id} href={item.link}>{item.title}</Link>
          ))}
        </ul>

        <ul className='flex flex-row gap-5'>
          <li className='cursor-pointer'><FaFacebookF size={30}/></li>
          <li className='cursor-pointer'><FaInstagram size={30}/></li>
          <li className='cursor-pointer'><FaXTwitter size={30}/></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer