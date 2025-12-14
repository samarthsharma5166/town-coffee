import Heading from '@/components/Heading'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto px-4'>
          <div className="h-18" />
          <div className='w-full  flex justify-center items-center flex-col h-[80%]'>
              <Heading heading='About Town Coffee'/>
              <div className='w-[70%] mx-auto flex flex-col gap-6 text-stone-700  mt-10 mb-20'>
                  <p>
                      Town Coffee is a neighborhood café built around good coffee, comforting food, and a space where people can slow down and enjoy the moment. We focus on quality ingredients, consistent flavors, and a welcoming atmosphere that works just as well for quick coffee breaks as it does for long conversations.
                  </p>
                  <p>
                      Our menu is designed to be familiar yet satisfying — handcrafted beverages, fresh bites, and café classics prepared with care. Whether you’re visiting for your daily brew, meeting friends, or spending a few quiet hours working, Town Coffee is made to feel easy, comfortable, and dependable.
                  </p>
                  <p>
                      Located in Lal Bahadur Nagar, Jaipur, we take pride in being a local spot that people return to — not because it’s trendy, but because it feels right. Simple service, honest food, and coffee done well.
                  </p>
              </div>
          </div>
    </div>
  )
}

export default page