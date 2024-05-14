'use client'

import React from 'react'
import { useFetch } from '@/hooks/useFetch'

const page = ({params}) => {
  const { data, isLoading, error } = useFetch(`http://127.0.0.1:1337/api/properties/${params.id}?populate=*`)
  

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

export default page