import React from 'react'
import { ImCalendar } from "react-icons/im";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=' min-h-10 flex justify-between items-center  bg-whitee '>
      <div className='flex items-center'>
        <div className='text-4xl  border-[3px] border-slate-900 p-2 rounded-full text-purple-900'><ImCalendar/></div>
        <div className='font-bold  text-[2rem]'>Routinesy</div>
      </div>
      <div className='flex items-center md:gap-9 gap-3 '>
      <NavLink to={'/home'} className='text-black no-underline hover:underline transform  cursor-pointer delay-100 ease-in-out translate-x-[0] transition-transform  font-semibold'>Home</NavLink>
      <NavLink to={'/about'} className='cursor-pointer text-black no-underline hover:underline transform  delay-100 ease-in-out translate-x-[0] transition-transform  font-semibold'>About</NavLink>
      </div>
      
    </div>
  )
}

export default Navbar
