'use client'

import React from 'react'
import { useFetch } from '@/hooks/useFetch'

const PropertySingle = ({ params }) => {
      const backendApi = process.env.NEXT_PUBLIC_BACKEND_API
  const { data, isLoading, error } = useFetch(`${backendApi}/api/properties/${params.id}?populate=*`)

  return (
        <div className='pt-[400px]'>
      {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data &&
        <div>{data.data.attributes.title}</div>
        }
    </div>
  )
}

export default PropertySingle