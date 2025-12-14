
"use client";
import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'


interface NavProps {
    openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
    
    const [navBg, setNavBg] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 90) {
                setNavBg(true)
            } else {
                setNavBg(false)
            }
        }
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])
  return (
    <div className={` ${navBg ? 'shadow-md bg-stone-800':'fixed'} transition-all duration-200 h-[12vh] z-1000 fixed w-full`}>
          <div className='flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto'>

              {/* LOGO */}
              <div className='flex items-center space-x-2'>
                  {/* <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                      <TbAirBalloon className='w-6 h-6 text-white' />
                  </div> */}
                  <h1 className={`text-xl md:text-2xl ${navBg ? ' text-white' : 'text-stone-800'} uppercase font-bold`}>Town Coffee</h1>
              </div>

              {/* NAVLINKS  */}
              <div className='hidden lg:flex items-center space-x-10'>
                  {
                      navLinks.map((link) => {
                          return <Link key={link.id} href={link.url}>
                              <p className={`relative ${navBg ? 'text-white' : 'text-stone-900'}   text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center`}>{link.text}</p>
                          </Link>
                      })
                  }
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-4">
                  <Link href={"/#book-table"}>
                  <button  className={`md:px-12 md:py-2.5 px-8 py-2  text-base ${navBg ?  'bg-white text-stone-700 hover:bg-stone-300':'bg-stone-700 text-white hover:bg-stone-400' } transition-colors duration-300 rounded-lg`}>Book Table</button>
                  </Link>
                  <HiBars3BottomLeft onClick={openNav} className='w-8 h-8 text-stone-700 cursor-pointer lg:hidden' />
              </div>
          </div>
    </div>
  )
}

export default Nav