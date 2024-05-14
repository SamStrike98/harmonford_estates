'use client'

import { useState } from "react"
import { useFetch } from "@/hooks/useFetch"
import Link from "next/link"
import PaginatedItems from "./PaginatedItems"
import PropertyCard from "./PropertyCard"

const PropertiesList = ({}) => {
    const backendApi = process.env.NEXT_PUBLIC_BACKEND_API || 'https://127.0.0'

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);
    const [minBeds, setMinBeds] = useState(1);
    const [maxBeds, setMaxBeds] = useState(5);

    const [sort, setSort] = useState('publishedAt:desc')


      const handleSubmit = (e) => {
        e.preventDefault();
        // setBaseUrl('http://127.0.0.1:1337/api/properties?filters[bedrooms][$between]=1&filters[bedrooms][$between]=2&populate=*')
        setUrl(`${baseUrl}&filters[bedrooms][$between]=${Number(minBeds)}&filters[bedrooms][$between]=${Number(maxBeds)}&filters[cost][$between]=${Number(minPrice)}&filters[cost][$between]=${Number(maxPrice)}&pagination[pageSize]=10&pagination[page]=${pageNumber}&sort=${sort}`)
        console.log(minBeds, maxBeds)
      }


      const [baseUrl, setBaseUrl] = useState(`${backendApi}/api/properties?populate=*`)

      const [pageNumber, setPageNumber] = useState(1)

      const [url, setUrl] = useState(`${baseUrl}&pagination[pageSize]=10&pagination[page]=${pageNumber}&sort=publishedAt:desc`)

        const { data, isLoading, error } = useFetch(url)

  return (
    <div className="pt-[200px]">
        {isLoading && <div>Loading, I am using free hosting, so load times may be slow...</div>}
        {error && <div>{error}</div>}
        {data &&
        
        <div className="text-blue-500">
            <form className='bg-blue-400'>

            <label>Min Price</label>
            <select onChange={(e) => setMinPrice(e.target.value)} defaultValue={0}>
                <option value={0}>£0</option>
                <option value={500}>£500 PCM</option>
                <option value={600}>£600 PCM</option>
                <option value={750}>£750 PCM</option>
                <option value={1000}>£1000 PCM</option>
                <option value={1500}>£1500 PCM</option>
                <option value={2000}>£2000 PCM</option>
            </select>

            <label>Max Price</label>
            <select onChange={(e) => setMaxPrice(e.target.value)} defaultValue={2000}>
                <option value={500}>£500 PCM</option>
                <option value={600}>£600 PCM</option>
                <option value={750}>£750 PCM</option>
                <option value={1000}>£1000 PCM</option>
                <option value={1500}>£1500 PCM</option>
                <option default value={2000}>£2000 PCM</option>
            </select>

            <label>Min Beds</label>
            <select onChange={(e) => setMinBeds(e.target.value)} defaultValue={1}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <label>Max Beds</label>
            <select onChange={(e) => setMaxBeds(e.target.value)} defaultValue={5}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <label>Sort By</label>
            <select defaultValue={'publishedAt:desc'} onChange={(e) => {setSort(e.target.value)}}>
                <option value={'publishedAt:desc'}>Date: Newest to Oldest</option>
                <option value={'publishedAt:asc'}>Date: Oldest to Newest</option>
                <option value={'cost:asc'}>Price: Lowest to Highest</option>
                <option value={'cost:asc'}>Price: Highest to Lowest</option>
            </select>

            <button onClick={handleSubmit}>Submit</button>
        </form>

            <ul className="flex flex-col">
                <p>Showing Results {} Results Found: {data.meta.pagination.total}</p>
                {data.data.map(property => (
                    <PropertyCard key={property.id} id={property.id} title={property.attributes.title} cost={property.attributes.cost}/>
                    
                ))}
            </ul>

            <PaginatedItems pageCount={data.meta.pagination.pageCount} page={data.meta.pagination.page} pageNumber={pageNumber} setPageNumber={setPageNumber} setUrl={setUrl} url={url} minBeds={minBeds} maxBeds={maxBeds} minPrice={minPrice} maxPrice={maxPrice} sort={sort}/>
        </div>
        
        
        }
    </div>
  )
}

export default PropertiesList