'use client'

import React from 'react'
import { useFetch } from '@/hooks/useFetch'

const PropertySingle = ({ id }) => {
      const backendApi = process.env.NEXT_PUBLIC_BACKEND_API || 'https://127.0.0'
  const { data, isLoading, error } = useFetch(`${backendApi}/api/properties/${id}?populate=*`)

  return (
        <div className='pt-[400px]'>
      {isLoading && <div>Loading, I am using free hosting, so load times may be slow...</div>}
        {error && <div>{error}</div>}
        {data &&
        <div>{data.data.attributes.title}</div>
        }
    </div>
  )
}

export default PropertySingle