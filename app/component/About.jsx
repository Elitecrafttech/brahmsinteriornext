"use client";
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import Contact from './Contact'

const About = () => {
  return (
    <div>
        <div data-aos="fade-up" className='abt'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d63134.2967573031!2d4.5121294!3d8.5097162!3m2!1i1024!2i768!4f13.1!2m1!1sNo%2063%20Taiwo%20yidi%20road%20ilorin%20kwara%20state!5e0!3m2!1sen!2sng!4v1743063032670!5m2!1sen!2sng"
          width="100%" 
          height="450" 
          style={{ border: 0, minHeight: '450px' }} 
          allowFullScreen  
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

            <div className='flex lg:flex-row-reverse lg:justify-between flex-col'>
                <div className='flex flex-col items-center'>
                <img data-aos="fade-up" src='/assets/abt.webp'  width={500} height={500} loading="lazy" alt="showcase" className='lg:min-h-full min-h-[500px] lg:w-[500px] w-full'/>
                <img src='/assets/whatsqr.webp' width={300} height={300} loading="lazy" alt="qrcode" className='h-[250px] lg:h-[300px] relative bottom-[380px] lg:bottom-[400px] rounded-lg'/>
                </div>
                <div className='lg:pl-[50px] py-[40px] px-[20px] lg:px-[0px] flex flex-col gap-[30px]'>
                    <p data-aos="fade-up" className='lg:w-[43vw] text-[16px] text-center lg:text-left'>At [BRAHMS_INTERIOR2], we specialize in crafting timeless furniture and curated interior decor that transform spaces into stylish and functional havens. With a passion for design and quality craftsmanship, we offer a diverse range of furniture pieces and decor accents that blend elegance, comfort, and modern aesthetics.
                       Whether you’re looking for bespoke furniture, statement decor pieces, or complete interior styling, our expert team is dedicated to bringing your vision to life. We believe that every space should tell a story, and we’re here to help you create one that reflects your personality and style.
                       Discover the perfect balance of beauty and functionality with [BRAHMS_INTERIOR2]—where design meets excellence.</p>
                       <div className='flex flex-col gap-[20px]'>
                        <h1 data-aos="fade-up" className='font-extrabold text-2xl text-center lg:text-left'>Get more discount off your order</h1>
                        <button data-aos="fade-up" className=' flex text-center justify-center items-center gap-[5px] px-[40px] py-[5px] rounded-xl border-2 border-emerald-600 text-[18px] hover:bg-emerald-400 transition cursor-pointer'
                         onClick={() => window.open('https://wa.me/+2348105399041', '_blank')}
                        >Place Order <IoLogoWhatsapp /></button>
                       </div>
                </div>
            </div>
        </div>
            <div>
                <Contact />
            </div>
    </div>
  )
}

export default About