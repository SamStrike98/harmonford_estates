'use client'

import React from 'react'
import Image from 'next/image'
import logo from '@/public/goldcastle.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link'
import { useState } from 'react';


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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-[#052853] fixed w-full h-[120px] py-2'>
      <div className='max-container flex flex-row items-center justify-between md:justify-evenly'>
        <Image alt='logo' className='ml-4' src={logo} height='100' width='100'/>
        <nav className={`${isOpen ? 'flex flex-col' : 'hidden md:flex flex-row'} h-[calc(100vh-120px)] md:h-full top-[120px] md:top-0  md:translate-y-0 w-full md:flex-row justify-evenly text-center md:w-[60%] absolute md:relative`}>
          {navLinks.map(item => (
            <Link onClick={() => setIsOpen(false)} key={item.id} href={item.link} className='text-white w-full h-full bg-blue-400 hover:bg-blue-200 md:hover:bg-transparent md:hover:text-blue-200 md:bg-transparent flex flex-col justify-center'>{item.title}</Link>
          ))}
        </nav>
        <div className='flex flex-col md:hidden cursor-pointer mr-4'>
          {isOpen ? <RxCross1 color='white' size={42} onClick={() => setIsOpen(!isOpen)} /> : <RxHamburgerMenu color='white' size={42} onClick={() => setIsOpen(!isOpen)} />}
        </div>
        
      </div>
        
        {/* <nav className='md:hidden flex flex-row'>
          {navLinks.map(item => (
            <Link key={item.id} href={item.link} className='text-white'>{item.title}</Link>
          ))}
        </nav> */}
    </div>
  )
}

export default Navbar