import React from 'react'


interface MenuHeadingProps {
    heading?: string;
}
const Heading = ({heading}: MenuHeadingProps) => {
  return (
    <div className='w-full mt-15 mb-10 relative flex items-center justify-center'>
        <div className='w-fit'>
              <h1 className='relative text-3xl after:content-[""] after:w-full after:h-0.5 after:absolute after:bottom-0 pb-2 after:bg-stone-700 after:block sm:text-4xl md:text-5xl lg:text-6xl text-stone-700 text-center'>{heading}</h1>
        </div>
    </div>
  )
}

export default Heading  