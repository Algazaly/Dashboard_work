import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='bg-white p-4 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-50'>
     <div className='flex items-center py-3 px-2 space-x-4'>
        <img src={assets.dummy} alt="" className='rounded-lg bg-blue-500 border-4 border-blue-500  ' /> 
      <h1 className=' text-3xl font-poppins hidden md:block '>Dabang</h1>
     </div>
      <div>

        <ul className='flex flex-col mt-5 text-xl'>
            <li className='flex items-center py-3 px-2 space-x-4 font-normal rounded-xl border-4 text-white  bg-blue-500 border-blue-500 hover:rounded hover:cursor-pointer ' ><img src={assets.Dash} alt="" /> <span className='hidden md:inline'>Dashboard</span></li>
            <li className='flex items-center py-3 px-2 space-x-4 font-normal text-gray-400 hover:rounded hover:cursor-pointer'><img src={assets.Ldash} alt="" /><span className='hidden md:inline'>Leaderboard</span></li>
            <Link to="/order" className='flex items-center py-3 px-2 space-x-4 font-normal text-gray-400 hover:rounded hover:cursor-pointer'><img src={assets.Order} alt="" /><span className='hidden md:inline'>Order</span></Link>
            <li className='flex items-center py-3 px-2 space-x-4 font-normal text-gray-400 hover:rounded hover:cursor-pointer'><img src={assets.Product} alt="" /><span className='hidden md:inline'>Products</span></li>
            <li className='flex items-center py-3 px-2 space-x-4 font-normal text-gray-400 hover:rounded hover:cursor-pointer'><img src={assets.Sales} alt="" /><span className='hidden md:inline'>Sales Report</span></li>
            <li className='flex items-center py-3 px-2 space-x-4 font-normal text-gray-400 hover:rounded hover:cursor-pointer'><img src={assets.Message} alt="" /><span className='hidden md:inline'>Messages</span></li>
            <li className='flex items-center py-3 px-2 space-x-4 font-normal text-gray-400 hover:rounded hover:cursor-pointer'><img src={assets.Setting} alt="" /><span className='hidden md:inline'>Settings</span></li>
            <li className='flex items-center py-3 px-2 space-x-4 font-normal text-gray-400 hover:rounded hover:cursor-pointer'><img src={assets.Signout} alt="" /><span className='hidden md:inline'>Sign Out</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
