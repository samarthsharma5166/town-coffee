"use client"
import { HeroImageList } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'


const HeroImage = () => {
  return (
    <div className='flex flex-row gap-2 items-center justify-center'>
        {
              HeroImageList.map((image,index)=>{
                return (
                    <div
                    key={index}
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay={`${index * 100}`}
                     className='w-100 h-70 relative'>
                        <Image className={`w-100 h-full object-cover rounded-md`} fill  src={image} alt=''/>
                    </div>
                )
              })
        }
    </div>
  )
}

export default HeroImage