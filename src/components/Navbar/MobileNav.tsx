
import { navLinks } from '@/constants/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
 

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void
}
const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navOpen = showNav ? 'translate-x-0' : '-translate-x-full'
   return (
     <div>
       <div className={`fixed ${navOpen} inset-0 transform transition-all z-1002 duration-500 bg-black opacity-70 w-full h-screen`}>
       </div>
       <div className={`${navOpen} text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-stone-800 space-y-6 z-1050`}>
        {
          navLinks.map((link)=>{
            return <Link key={link.id} href={link.url}>
                <p className='w-fit text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                  {link.text}
                </p>
            </Link>
          })
        }
       <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 '/>
       </div>
     </div>
   )
 }
 
 export default MobileNav