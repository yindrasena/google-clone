import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa6";
import { TbPhotoSensor3 } from "react-icons/tb";


function searchbar() {
  return (
    <div className='flex'>
      <form className='flex w-full border hover:border-gray-300 max-w-[90%] mt-5 mx-auto 
      px-5 py-2 space-x-4 rounded-full hover:shadow-md items-center'>
      <AiOutlineSearch className='w-8 h-8'/>
      <input type='text' className='flex-grow focus:outline-none'></input>
      <FaMicrophone className='w-6 h-6'/>
      <TbPhotoSensor3 className='w-8 h-8'/>
      </form>
    </div>
  )
}

export default searchbar
