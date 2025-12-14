import React from 'react'
import Heading from '../Heading'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import Link from 'next/link'

const BookMyTable = () => {
  return (
    <div className="relative w-full pt-20 px-8 sm:px-0  bg-[url('/bg.webp')] bg-cover bg-center bg-fixed">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      {/* Content */}
      <div
        id="book-table"
        className="relative z-10 container mx-auto pb-20 text-white"
      >

        <div className='w-full mt-15 mb-10 relative flex items-center justify-center'>
          <div className='w-fit'>
            <h1 className='relative text-3xl after:content-[""] after:w-full after:h-0.5 after:absolute after:bottom-0 pb-2 after:bg-stone-100 after:block sm:text-4xl md:text-5xl lg:text-6xl text-stone-100 text-center'>Book My Table</h1>
          </div>
        </div>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input className="bg-white/90 text-black" placeholder="Your Name" />
            <Input className="bg-white/90 text-black" placeholder="Your Email" />
            <Input className="bg-white/90 text-black" placeholder="Your Phone" />
            <Input className="bg-white/90 text-black" type="date" />
            <Input className="bg-white/90 text-black" type="time" />
            <Input className="bg-white/90 text-black" type="number" placeholder="Guests" />
          </div>

          <Textarea
            minLength={10}
            rows={4}
            className="
    bg-white/90 text-black mt-4
    resize-none
    overflow-y-auto
  "
            placeholder="Special Requests"
          />

          <div className="flex justify-center mt-6">
            <Link
              href="#"
              className="rounded-md px-20 py-3 bg-amber-700 hover:bg-amber-600 text-white font-semibold transition"
            >
              Book Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}


export default BookMyTable