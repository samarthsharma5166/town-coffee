import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
      <div className='pt-20 pb-20 flex item-center justify-center flex-col bg-[#FBAE30]'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            <div>
                <h1 className='text-2xl font-semibold text-stone-700'>What our cutomers are saying us?</h1>
                <p className='mt-6 text-stone-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a voluptatibus dolore, nesciunt odio nemo consequuntur placeat saepe ab, vero quam sit error necessitatibus. Quibusdam soluta placeat neque fuga omnis.
                </p>
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                          <p className='text-2xl font-bold text-stone-700'>4.88</p>
                        <p className='text-stone-700 mb-2'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-stone-700'/>
                              <FaStar className='text-stone-700' />
                              <FaStar className='text-stone-700' />
                              <FaStar className='text-stone-700' />
                              <FaStar className='text-stone-700'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='overflow-hidden'>
                <ReviewSlider/>
            </div>

        </div>
    </div>
  )
}

export default Review