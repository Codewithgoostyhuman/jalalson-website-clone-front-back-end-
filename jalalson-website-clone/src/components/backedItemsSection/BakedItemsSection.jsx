import React from 'react'
import { backedItemsArray } from './backedItemsArray'
import ProductCard from '../ProductCard'
const BakedItemsSection = () => {
  return (
    <div>
      <div className='bg-gray-950 text-white flex justify-center items-center flex-col'>
        <div className='text-red-600 pt-4 text-sm'>JALAL SONS BACKERY</div>
    <div className='text-lg sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl  font-bold pb-4'>Pure Baked Perfection</div>
    <div><div className='m-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-full md:w-[98%] lg:w-[70%] xl:w-[45%] justify-center'>
      {backedItemsArray.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div></div>
    
    </div>
    </div>
  )
}

export default BakedItemsSection
