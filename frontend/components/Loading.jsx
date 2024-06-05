import React from 'react'

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Loading = () => {
  return (
    <div className='flex flex-col gap-5 w-[50%]'>
        {arr.map(item => (
            <div key={item} className="flex flex-row gap-4 w-full h-[250px]">
                <div className="skeleton h-full w-full"></div>                
            </div>
        ))}
        
    </div>
  )
}

export default Loading