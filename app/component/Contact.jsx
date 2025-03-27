import React from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { SiFacebook } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";


// Footer with social media Icons
const Contact = () => {
  return (
    <div className='bckg bg-emerald-600 py-[20px] px-[30px] flex flex-col gap-[40px]'>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-[40px]'>
           <div className='flex flex-col items-center'>
           <a data-aos="fade-up" className='font-extrabold text-[18px]' href="#">BRAHMS_INTERIOR</a>
           <img src='/assets/logo.webp' loading="lazy" alt="logo" className='h-[100px] w-[190px]'/>
           </div>
            <div className='flex gap-[15px]'>
              <div data-aos="fade-up"><TiSocialInstagram className='text-[25px] cursor-pointer'  onClick={() => window.open('https://www.instagram.com/brahms_interior_design?igsh=ZWExNGU3dWVtZTc1&utm_source=qr', '_blank')}/></div>
              <div data-aos="fade-up"><AiFillTikTok className='text-[25px] cursor-pointer' onClick={() => window.open('https://www.tiktok.com/@brahms_interior2?_t=ZM-8utbgq67xpO&_r=1', '_blank')}/></div>
              <div data-aos="fade-up"><SiFacebook className='text-[25px] cursor-pointer' onClick={() => window.open('https://www.facebook.com/profile.php?id=100093480852026&mibextid=wwXIfr&mibextid=wwXIfr', '_blank')}/></div>
              
            </div>
        </div>
        <div className='flex justify-center items-center gap-[5px]'> <span className='text-[25px]'>&copy; </span> BRAHMS_INTERIOR 2025 - All Rights Reserved</div>
    </div>
  )
}

export default Contact