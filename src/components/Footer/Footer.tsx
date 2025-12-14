import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-16 pb-16 bg-stone-800'>
            <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='space-y-5'>
                    <h1 className='text-lg text-white font-bold'>Company</h1>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        About Us
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Career
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Blogs
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Gift Cards
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Magazine
                    </p>
                </div>

                {/* 2nd Part */}
                {/* <div className='space-y-5'>
                    <h1 className='text-lg text-white font-bold'>Support</h1>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Contact
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Legal Notice
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Privacy Policy
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Terms & condition
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Sitemap
                    </p>
                </div> */}
                {/* 3rd Part */}
                {/* <div className='space-y-5'>
                    <h1 className='text-lg text-white font-bold'>Other Services</h1>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Car Hire
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Activity Finder
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Tour List
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Flight Finder
                    </p>
                    <p className='text-gray-100 font-medium cursor-pointer text-sm hover:text-yellow-400'>
                        Travel Agents
                    </p>
                </div> */}

                {/* 4th Part */}
                <div>
                    <h1 className='text-lg text-white font-bold'>Contact Us</h1>
                    <div className='mt-6'>
                        <h1 className='text-sm text-gray-100'>Our Mobile Number</h1>
                        <h1 className='text-base font-bold text-gray-100 mt-1'>+077 118 99993</h1>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-sm text-gray-100'>Our Email</h1>
                        <h1 className='text-base font-bold text-gray-100 mt-1'>example@gmail.com</h1>
                    </div>
                </div>
            </div>

            <div className='mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
                <p className='text-center text-white md:text-left'>Copyright 2025 Samarth Sharma. All rights Reserved</p>
                <div className='flex items-center space-x-4  mt-4 md:mt-0'>
                    <span>Social: </span>
                    <Link href="#" className='text-gray-100 hover:text-yellow-400'>
                        <FaFacebook />
                    </Link>
                    <Link href="#" className='text-gray-100 hover:text-yellow-400'>
                        <FaTwitter />
                    </Link>
                    <Link href="#" className='text-gray-100 hover:text-yellow-400'>
                        <FaInstagram />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer