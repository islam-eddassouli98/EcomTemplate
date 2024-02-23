import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";


type Props = {}

const Header = (props: Props) => {
  return (
    <span className='flex sticky top-7 z-10 h-0 ml-2'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-start justify-start gap-5 text-sm '>
          <button className='text-center flex items-center justify-center bg-primary py-2 px-3 rounded-full backdrop-blur font-bold'>LOGO</button>
          <button className='text-center flex items-center justify-center bg-primary py-2 px-3 rounded-full backdrop-blur'>
            <ul className='flex items-center justify-center flex-row gap-3'>
              <li>New Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>About Us</li>
              <li>Client Service</li>
            </ul>
          </button>
        </div>
        <div className='flex items-end justify-center mr-2 gap-5'>
          <button className='text-center flex items-center justify-center bg-primary py-2 px-3 rounded-full backdrop-blur gap-2 '>
            <IoSearchOutline className='w-5 h-5' />
            <span className='font-semibold'>Search</span>
          </button>
          <button className='text-center flex items-center justify-center bg-primary py-2 px-3 rounded-full backdrop-blur gap-2 '>
            <CiShoppingCart className='w-6 h-6' />
            <span className='font-semibold'>Cart (0)</span>
          </button>
        </div>
      </div>
    </span>
  )
}

export default Header