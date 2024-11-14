
import React from 'react'

const Hero = () => {
  return (
<section className="bg-[url('/images/Herobg.png')] bg-cover bg-center">
  <div className="container mx-auto flex flex-wrap px-5 md:py-24 py-6 items-center">
    <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:w-2/5">
      <h1 className="title-font md:text-[64px] text-[40px] mb-4 font-bold text-white">Crafting Tailored Solutions for Your Unique Needs</h1>
      <p className="mb-8 leading-relaxed md:text-[20px] font-medium text-white">Where Ingenuity Meets Expertise.</p>
      <div className="flex justify-start">
        <button className="inline-flex text-black bg-white border-0 py-4 px-6 focus:outline-none hover:bg-[#0D5F7F] hover:text-white rounded-3xl text-base">Contact Us</button>
        <button className="ml-4 inline-flex text-white bg-none border border-white py-4 px-6 focus:outline-none hover:bg-white hover:text-black rounded-3xl text-base">See Reviews</button>
      </div>
    </div>
    <div className="flex flex-col">
      <img className="object-cover object-center rounded" alt="hero" src="/images/girl.png"/>
    </div>
  </div>
</section>
  )
}

export default Hero

