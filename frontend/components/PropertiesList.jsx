'use client'

import { useState } from "react"
import { useFetch } from "@/hooks/useFetch"
import Link from "next/link"
import PaginatedItems from "./PaginatedItems"
import PropertyCard from "./PropertyCard"

import { FaBed, FaBath, FaMoneyBillAlt, FaSort } from "react-icons/fa";
import Loading from "./Loading"

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
    <div className="pt-[120px] min-h-[100vh] max-w-[1200px] mx-auto">
        {isLoading && <div className='flex flex-col items-center gap-4 text-[#052853]'>
                            <span className="loading loading-spinner loading-lg"></span>
                            <p>Loading, I am using free hosting, so load times may be slow...</p>
                            <Loading />
                        </div>}
        {error && <div>{error}</div>}
        {data &&
        
        <div className="text-blue-500 flex flex-col items-center w-full bg-[#F4F4F4]">
            <form className='text-[#4D8C87] py-3 flex flex-col items-center gap-2 lg:gap-1 lg:flex-row justify-evenly w-[80%]'>

            <div className="flex flex-col items-center w-full">
                <label className="text-[#4D8C87] flex flex-row items-center gap-1">Min <FaMoneyBillAlt /></label>
                <select onChange={(e) => setMinPrice(e.target.value)} defaultValue={0} className="bg-white rounded-md w-1/2 lg:w-fit border border-[#4D8C87] cursor-pointer outline-none py-1 px-2">
                    <option value={0}>£0</option>
                    <option value={500}>£500 PCM</option>
                    <option value={600}>£600 PCM</option>
                    <option value={750}>£750 PCM</option>
                    <option value={1000}>£1000 PCM</option>
                    <option value={1500}>£1500 PCM</option>
                    <option value={2000}>£2000 PCM</option>
                </select>
            </div>

            <div className="flex flex-col items-center w-full">
                <label className="text-[#4D8C87] flex flex-row items-center gap-1">Max <FaMoneyBillAlt /></label>
                <select onChange={(e) => setMaxPrice(e.target.value)} defaultValue={2000} className="bg-white rounded-md w-1/2 lg:w-fit border border-[#4D8C87] cursor-pointer outline-none py-1 px-2">
                    <option value={500}>£500 PCM</option>
                    <option value={600}>£600 PCM</option>
                    <option value={750}>£750 PCM</option>
                    <option value={1000}>£1000 PCM</option>
                    <option value={1500}>£1500 PCM</option>
                    <option default value={2000}>£2000 PCM</option>
                </select>
            </div>

            <div className="flex flex-col items-center w-full">
                <label className="text-[#4D8C87] flex flex-row items-center gap-1">Min <FaBed /></label>
                <select onChange={(e) => setMinBeds(e.target.value)} defaultValue={1} className="bg-white rounded-md w-1/2 lg:w-fit border border-[#4D8C87] cursor-pointer outline-none py-1 px-2">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div className="flex flex-col items-center w-full">
                <label className="text-[#4D8C87] flex flex-row items-center gap-1">Max <FaBed /></label>
                <select onChange={(e) => setMaxBeds(e.target.value)} defaultValue={5} className="bg-white rounded-md w-1/2 lg:w-fit border border-[#4D8C87] cursor-pointer outline-none py-1 px-2">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div className="flex flex-col items-center w-full">
                <label className="text-[#4D8C87] flex flex-row items-center gap-1">Sort By <FaSort /></label>
                <select defaultValue={'publishedAt:desc'} onChange={(e) => {setSort(e.target.value)}} className="bg-white rounded-md w-1/2 lg:w-full border border-[#4D8C87] cursor-pointer outline-none py-1 px-2">
                    <option value={'publishedAt:desc'}>Date: Newest to Oldest</option>
                    <option value={'publishedAt:asc'}>Date: Oldest to Newest</option>
                    <option value={'cost:asc'}>Price: Lowest to Highest</option>
                    <option value={'cost:asc'}>Price: Highest to Lowest</option>
                </select>
            </div>

            <button className="text-white bg-[#052853] border border-white py-1 px-2 rounded-md lg:self-end" onClick={handleSubmit}>Submit</button>
        </form>

            <div className="flex flex-col w-[85%]">
                <p>Results Found: {data.meta.pagination.total}</p>

                <ul className="flex flex-col gap-7">
                {data.data.map(property => (
                    <PropertyCard key={property.id} id={property.id} title={property.attributes.title} cost={property.attributes.cost} image={`${property.attributes.images.data[0].attributes.formats.small.url}`} bedrooms={property.attributes.bedrooms} bathrooms={property.attributes.bathrooms} description={property.attributes.description}/>
                    
                ))}
                </ul>
            </div>

            <PaginatedItems pageCount={data.meta.pagination.pageCount} page={data.meta.pagination.page} pageNumber={pageNumber} setPageNumber={setPageNumber} setUrl={setUrl} url={url} minBeds={minBeds} maxBeds={maxBeds} minPrice={minPrice} maxPrice={maxPrice} sort={sort}/>
        </div>
        
        
        }
    </div>
  )
}

export default PropertiesList