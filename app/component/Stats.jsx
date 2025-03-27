"use client";
import React from 'react'

const Stats = () => {
  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="3000"
    data-aos-delay="3000"
    data-aos-easing="ease-in-out-sine"
    data-aos-mirror="true"
    className='flex justify-center items-center '>
        <div className='bg-emerald-600 relative bottom-[30px] rounded-[20px] lg:px-[30px] lg:py-[30px] lg:w-[90vw] lg:items-center w-[90%] md:flex-wrap flex lg:justify-around text-center lg:gap-0 gap-[10px] px-[10px] py-[40px] '>
            <div>
                <h2 data-aos="fade-up" className='text-2xl font-semibold lg:text-4xl'>7</h2>
                <p data-aos="fade-up" className='text-base font-light  mx-auto lg:text-xl'>Years Experience</p>
            </div>
            <div className='border-r'></div>
            <div className=''>
                <h2 data-aos="fade-up" className='text-2xl font-semibold lg:text-4xl'>10k+</h2>
                <p data-aos="fade-up" className='text-base font-light  mx-auto lg:text-xl'>Furniture Sold</p>
            </div>
            <div className='border-r'></div>
            <div>
                <h2 data-aos="fade-up" className='text-2xl font-semibold lg:text-4xl'>100k+</h2>
                <p data-aos="fade-up" className='text-base font-light mx-auto lg:text-xl'>Variant Furniture</p>
            </div>
        </div>
    </div>
  )
}

export default Stats