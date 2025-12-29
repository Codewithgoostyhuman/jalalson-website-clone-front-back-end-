import React from 'react'

const Cart = ({ isOpen, totalPriceInCart ,setTotalPriceInCart }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center  border shadow-2xl justify-end">
        <div className='absolute inset-0 bg-black/0 shadow-2xl' onClick={()=>isOpen(false)}/>
        <div className='bg-white w-full sm:w-[300px] md:w-[400px] lg:w-[400px] xl:w-[400px]
         h-full border border-gray-300 shadow-lg z-50 flex flex-col justify-between'>
            {/* Cart Header */}
            <div className='border-b border-gray-300 flex justify-start h-[8%] items-center'>  
                <button onClick={()=>isOpen(false)} className='p-4'><img width="20" height="30" src="https://img.icons8.com/color/48/delete-sign--v1.png" alt="delete-sign--v1"/></button>
                <span className='p-2 m-2 font-bold'>Your Cart</span>
            </div>
            {/* Cart Items */}
            <div className='flex justify-center items-center'>
                <div>Your cart is empty</div>
            </div>
            {/* Cart Footer */}
            <div className='bg-gray-100 border-t border-gray-300 flex justify-center p-4 h-[10%] items-center'>
                <button className='bg-red-500 text-white font-bold p-2 w-[95%] rounded-lg'>CheckOut</button>
            </div>
         </div>
    </div>
  )
}

export default Cart
