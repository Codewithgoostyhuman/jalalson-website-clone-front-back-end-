import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='bg-gray-950 text-white h-auto flex justify-center  items-center w-fit flex-col gap-2 m-2 text-[12px] uppercase'>
        <img src={product.src} alt={product.name} className='w-max-48 h-max-48 w-auto h-auto object-cover' />
      {product.name}
      <span>{product.price}</span>
      <button className='cursor-pointer bg-red-600 px-4 py-2 w-full rounded-sm text-[10px] font-bold'>ORDER NOW</button>
    </div>
  )
}

export default ProductCard
