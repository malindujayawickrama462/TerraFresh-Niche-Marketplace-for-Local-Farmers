import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='bg-white shadow-md px-6 py-4 flex justify-between items-center'>
      <div>
              <Link to="/" className='text-2xl font-bold text-green-600'>Terrafresh</Link>

      </div>
      <div className='flex gap-6 justify-center items-center'>
        <Link to='/' className='text-gray-700 hover:text-green-600'>Home</Link>
         <Link to='/marketplace' className='text-gray-700 hover:text-green-600'>MarketPlace</Link>
        <Link to='/login' className='text-gray-700 hover:text-green-600'>Login</Link>
        <Link to='/register' className='bg-green-600 text-white hover:text-green-700 px-6 py-4 rounded-md'>Register</Link>

      </div>
    </div>
  )
}

export default NavBar