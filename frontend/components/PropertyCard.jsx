import React from 'react'
import Link from 'next/link'

const PropertyCard = ({ title, cost, id }) => {
  return (
    <div className='flex flex-row'>
        <Link href={`/properties/${id}`} className="text-blue-400">{title}</Link>
        <p>£{cost}</p>
    </div>
    
  )
}

export default PropertyCard