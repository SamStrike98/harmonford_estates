'use client'

import Image from 'next/image'
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Slider = ({ imgArr }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImg = () => {
        const isLastImg = currentIndex === imgArr.length - 1;
        const newIndex = isLastImg ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        
    }

    const prevImg = () => {
        const isFirstImg = currentIndex === 0;
        const newIndex = isFirstImg ? imgArr.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        
    }
  return (
    <div className='flex flex-row justify-center items-center'>
        <span><FaAngleLeft color='#052853' onClick={prevImg} className='hover:scale-[2.5] transition-transform cursor-pointer'/></span>
        <div className={`bg-[#052853] p-1 max-w-[950px] w-[80vw] h-[48vw] max-h-[50vh] flex flex-col justify-center items-center mx-2 rounded-md`}>
            <Image src={imgArr[currentIndex].attributes.formats.large.url} width={1280} height={720} className='w-full h-full rounded-sm' alt="sd"/>
        </div>
        
        <span><FaAngleRight color='#052853' onClick={nextImg} className='hover:scale-[2.5] transition-transform cursor-pointer'/></span>
    </div>
  )
}

export default Slider