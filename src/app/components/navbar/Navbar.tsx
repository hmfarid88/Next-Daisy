"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

const Navbar = () => {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">DaisyUI</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div>

          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
        
              </div>
            </label>

            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-50">
              <li><Link href="/pages/profile" className="justify-between">Profile</Link></li>
              <li><Link href="/pages/setting">Settings</Link></li>
              <li><a>Logout</a></li>

            </ul>

          </div>
          
          <select className='btn btn-sm' value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="luxury">Luxury</option>
            <option value="autumn">Autumn</option>
          </select>


        </div>



      </div>

    </div>

  )
}


export default Navbar