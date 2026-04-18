"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaUser, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navItem = [
        { Name: "Mens", path: '/about' },
        { Name: "Womens", path: '/' },
        { Name: "Kids", path: '/' },
        { Name: "New Arrival", path: '/' },
        { Name: "Top Selling", path: '/' },
    ]

  return (
    <>
       <nav className='mt-2 sticky top-0 z-50 px-4 md:px-6 lg:px-8 '>
        <div className="container mx-auto bg-black py-[9px] px-[30px] rounded-l-full rounded-r-full">
            <div className="row flex justify-between items-center">
                    
                    {/* Left Hamburger (Mobile) */}
                    <div className="text-white text-[22px] md:hidden cursor-pointer" onClick={() => setOpen(true)}>
                        <FaBars />
                    </div>

                    {/* Logo */}
                    <div className="logo w-55">
                        <h1 className='lg:text-[28px] text-[19px] text-white font-mono font-bold'>
                          KaziR NatioN
                        </h1>
                    </div>

                    {/* Menu Desktop */}
                    <ul className='hidden md:flex items-center gap-[25px] text-white'>
                        {
                            navItem.map((item,i)=>(
                                <li key={i}>
                                    <Link href={item.path}>{item.Name}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Right Side Icons */}
                    <div className='flex items-center gap-[20px] text-white'>
                        <button>
                          <FaSearch />
                        </button>

                        <Link href={'/'}>
                          <FaUser />
                        </Link>

                        <Link href={'/cart'} className="relative">
                          <FaShoppingCart />
                          <span className="absolute -top-2 -right-3 bg-red-500 text-[10px] px-1 rounded-full">
                            2
                          </span>
                        </Link>
                    </div>
                    
            </div>
        </div>
       </nav>

       {/* Mobile Drawer */}
       <div className={`fixed top-0 left-0 h-full w-[250px] bg-black text-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50 md:hidden`}>

            <div className="flex justify-between items-center p-[20px] border-b border-gray-700">
                <h2 className="text-[20px]">Menu</h2>
                <FaTimes className="cursor-pointer" onClick={() => setOpen(false)} />
            </div>

            <ul className="flex flex-col gap-[20px] p-[20px]">
                {
                    navItem.map((item,i)=>(
                        <li key={i} onClick={() => setOpen(false)}>
                            <Link href={item.path}>{item.Name}</Link>
                        </li>
                    ))
                }
            </ul>
       </div>

       {/* Overlay */}
       {
        open && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
        )
       }
    </>
  )
}

export default Navbar
