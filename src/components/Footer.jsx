
import React from 'react'
import { MapIcon, PhoneIcon } from '@heroicons/react/24/outline'


const Footer = () => {
    return (
        <footer className="bg-[#1B4465] body-font">
            <div className="container px-5 md:pb-24 pb-12 md:pt-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left text-[#FFFFFF]">
                    <div className="flex-auto lg:w-1/4 md:w-1/2 w-full px-4 ">
                        <nav className="list-none mb-10 space-y-4 tracking-wide">
                            <li className='flex gap-6'>
                                <MapIcon aria-hidden="true" className="h-10 w-10" /> 
                                <a className="">Level 12, Rolex Tower, Sheikh Zayed Road, Near Financial Centre Metro Station, Dubai, UAE</a>
                            </li>
                            <li className='flex gap-6'>
                                <PhoneIcon aria-hidden="true" className="h-6 w-6" />
                                <a className="">+971504018377</a>
                            </li>
                            <li className='flex gap-6'>
                                <PhoneIcon aria-hidden="true" className="h-6 w-6" />
                                <a className="">team@Desoper.comk</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full flex-auto px-4">
                        <h2 className="title-font font-semibold text-[#41C1BA] tracking-widest text-sm mb-3">Main Link</h2>
                        <nav className="list-none mb-10 space-y-4 tracking-widest">
                            <li>
                                <a className="">Our Services</a>
                            </li>
                            <li>
                                <a className="">Portfolio</a>
                            </li>
                            <li>
                                <a className="">About Us</a>
                            </li>
                            <li>
                                <a className="">Blogs</a>
                            </li>
                            <li>
                                <a className="">Blogs</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full flex-auto px-4">
                        <h2 className="title-font font-semibold text-[#41C1BA] capitalize tracking-widest text-sm mb-3">SOCIAL MEDIA</h2>
                        <nav className="list-none md:mb-10 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
                           
                                <a class="rounded-3xl border-2 p-2">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                            
                           
                                <a class="ml-3 rounded-3xl border-2 p-2">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                            
                           
                                <a class="ml-3 rounded-3xl border-2 p-2">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            
                           
                                <a class="ml-3 rounded-3xl border-2 p-2">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                        </nav>
                        <p className="text-base text-gray-500 md:mt-20 mt-2">Copyright 2024 © Desoper</p>
                    </div>

                </div>
            </div>

                <div className="container mx-auto p-8 flex justify-center flex-wrap flex-col sm:flex-row border-t-2 border-[#FFFFFF]">
                    <img src={"/images/LogoFooter.png"} alt="logo" />
                </div>
          
        </footer>
    )
}

export default Footer

