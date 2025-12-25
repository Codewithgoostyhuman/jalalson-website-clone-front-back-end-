import React from 'react'
import ProductCard from '../ProductCard'
import { startersArray } from '../../components/startersSection/StartersArray'

const StarterSection = () => {
  return (
    <div className='bg-gray-950 text-white flex justify-center items-center flex-col'>
    <div className='text-3xl  font-bold pt-8 pb-4'>Starters</div>
    <div><div className='m-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full md:w-[98%] lg:w-[70%] xl:w-[45%] justify-center'>
      {startersArray.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div></div>
    
    </div>
    
  )
}

export default StarterSection

