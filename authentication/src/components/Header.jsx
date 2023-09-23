import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-blue-200 rounded-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className="font-bold">Header</h1>
        <ul className="flex gap-4">
           <Link to="/">
            <li>Home</li>
           </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/signin">
            <li>SignIn</li>
            </Link>
        </ul>
</div>
</div>
  )
}

export default Header