import React from 'react'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

const PaginatedItems = ({ pageCount, setPageNumber, pageNumber, setUrl, url, minBeds, maxBeds, minPrice, maxPrice, sort }) => {
    const backendApi = process.env.NEXT_PUBLIC_BACKEND_API

    const handlePageClick = (e) => {
        setPageNumber(e.selected + 1)
        console.log(e.selected + 1)
        // setUrl()
        // setUrl(`http://127.0.0.1:1337/api/properties?populate=*&pagination[pageSize]=10&pagination[page]=${e.selected+1}&sort=publishedAt:desc`)
        setUrl(`backendApi/api/properties?filters[bedrooms][$between]=${Number(minBeds)}&filters[bedrooms][$between]=${Number(maxBeds)}&filters[cost][$between]=${Number(minPrice)}&filters[cost][$between]=${Number(maxPrice)}&pagination[pageSize]=10&pagination[page]=${e.selected+1}&sort=${sort}`)
        
    }

  return (
    <div className='w-[60%] border-t border-b py-4 border-black'>
        <ReactPaginate containerClassName='flex flex-row items-center justify-evenly w-full' breakLabel="..." nextLabel="next >" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="< previous" renderOnZeroPageCount={null}/>
    </div>
  )
}

export default PaginatedItems