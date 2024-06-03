import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBed, FaBath, FaMoneyBillAlt } from "react-icons/fa";


const PropertyCard = ({ title, cost, id, image, bedrooms, bathrooms, description }) => {
  return (

    <div className="text-[#052853] flex flex-row w-full h-[250px] border-b border-[#052853] border-opacity-20 pb-7">
        <div className='flex flex-row justify-between w-full'>
          {image && <Image src={image} alt={`${title} image`} height="200" width="300" className='rounded-md object-cover' />}
          <div className='flex flex-col justify-between w-full'>
            <Link href={`/properties/${id}`}><h2 className='text-2xl text-center underline underline-offset-8 hover:text-[#0528539b]'>{title}</h2></Link>

            <div className='flex flex-row justify-center gap-3'>
              <div className='flex flex-row items-center border-opacity-20 border border-[#052853] py-1 px-2 w-min gap-3 rounded-md shadow-md'><FaMoneyBillAlt size={30}/> £{cost} </div>
              <div className='flex flex-row items-center border-opacity-20 border border-[#052853] py-1 px-2 w-min gap-3 rounded-md shadow-md'><FaBed size={30}/> {bedrooms}</div>
              <div className='flex flex-row items-center border-opacity-20 border border-[#052853] py-1 px-2 w-min gap-3 rounded-md shadow-md'><FaBath size={30}/> {bathrooms} </div>
            </div>
            
            <p className='w-[60%] flex flex-row justify-center mx-auto'>
              {description}
            </p>
          </div>
        </div>
        
    </div>
    
    
  )
}

export default PropertyCard