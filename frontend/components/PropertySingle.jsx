'use client'

import React from 'react'
import { useFetch } from '@/hooks/useFetch'
import Image from 'next/image'
import Slider from './Slider'

import goldCastle from '../public/goldcastle.svg'
import nextsvg from '../public/next.svg'
import vercelSvg from '../public/vercel.svg'

const PropertySingle = ({ id }) => {
      const imgArr=[goldCastle, nextsvg, vercelSvg]

      const backendApi = process.env.NEXT_PUBLIC_BACKEND_API
  const { data, isLoading, error } = useFetch(`${backendApi}/api/properties/${id}?populate=*`)

  return (
        <div className='pt-[130px] bg-[#F4F4F4] min-h-[100vh]'>
      {isLoading && <div><span className="loading loading-spinner loading-lg"></span>Loading, I am using free hosting, so load times may be slow...</div>}
        {error && <div>{error}</div>}
        {data &&
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-[#052853] mb-4'>{data.data.attributes.title}</h2>
          <div className='w-[80%] '>
            <Slider imgArr={data.data.attributes.slider_images.data}/>
          </div>
            
            <div className='max-w-[1000px] text-[#052853] border-4 p-4 border-[#052853] rounded-md w-[80vw] m-4'>
              <h3 className='text-2xl font-bold text-center'>Property Details</h3>
              <h5 className='text-lg font-bold mt-4'>Description:</h5>
              <p className='mb-4'>{data.data.attributes.description}</p>

              <h4 className='text-lg font-bold'>Key Information:</h4>
              <ul className='list-disc pl-10'>
                <li>Bedrooms: {data.data.attributes.bedrooms}</li>
                <li>Bathrooms: {data.data.attributes.bathrooms}</li>
                <li>Reception Rooms: {data.data.attributes.reception_rooms}</li>
                <li>Deposit: £{data.data.attributes.deposit}</li>
                <li>Rent: £{data.data.attributes.cost} PCM</li>
              </ul>

              <div>
                <ul>
                  {data.data.attributes.room_descriptions.map(room => (
                    <li key={room.title} className='my-2'>
                      <h4 className='text-lg font-bold'>{room.title}:</h4>
                      <p>{room.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        }
    </div>
  )
}

export default PropertySingle