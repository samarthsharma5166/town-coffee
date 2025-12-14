"use client";
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { reviewData } from '@/constants/constant';


const ReviewSlider = () => {
  return (
    <div>
      <Swiper effect='cards' grabCursor={true} modules={[EffectCards]} className="md:w-[450px] md:h-[350px]">
        {
          reviewData.map((item,index)=>{
            return(
              <SwiperSlide key={index} className='bg-[#FFF3EC] rounded-3xl'>
                <div className='w-[80%] mx-auto mt-16'>
                  <p className='text-xs sm:text-sm md:text-base font-semibold'>{item.review}</p>
                  <div className='flex items-center mt-4'>
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500'/>
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500' />
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500' />
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500' />
                    <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500' />
                  </div>
                  <div className='mt-10'>
                    <div className='flex items-center space-x-4'>
                      <Image src={item.image} alt="image" width={60} height={60} className='rounded-full'/>
                      <div>
                        <p className='text-sm sm:text-lg font-semibold'>{item.name}</p>
                        {/* <p className='text-gray-600 text-xs sm:text-base'>Web Developer</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default ReviewSlider