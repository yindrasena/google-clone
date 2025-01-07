import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillExperiment } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
   <header className='flex justify-between items-center p-4'>
    <div className='flex justify-start items-center p-x-4'>
    <Link href={'https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header'}
    className='flex p-4 hover:underline'>About</Link>
    <Link href={'https://store.google.com/in/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-GB'}
    className='flex p-4 hover:underline'>Store</Link>
    </div>

    <div className='flex justify-start items-center space-x-4'>
      <Link href={'https://mail.google.com/mail/u/0/?ogbl#inbox'}
      className='flex p-4 hover:underline'>Gmail</Link>
      <Link href={'https://www.google.co.in/imghp?hl=en&authuser=0&ogbl'}
      className='flex p-4 hover:underline'>Images</Link>
      <AiFillExperiment height={200} width={200} className='hover:bg-gray-300 hover:rounded-full
      hover:text-2xl hover:cursor-pointer'/>
      <TbGridDots height={200} width={200} className='hover:bg-gray-300 hover:rounded-full
      hover:text-2xl hover:cursor-pointer'/>
      <FaHome height={200} width={200} className='hover:bg-gray-300 hover:rounded-full
      hover:text-2xl hover:cursor-pointer'/>
      <button className='hover:underline bg-blue-500 rounded-md pr-2 pl-2'>SignIn</button>

    </div>
   </header>
  )
}
