import Image from 'next/image'
import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


interface PropsType {
    showShort: boolean;
}


export default function NextProjects({ showShort }: PropsType) {
    return (
        <div className=' mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
            <a href="https://glassmorphism-protfolio.vercel.app/works/beardo" target={"_blank"} rel="noreferrer">
                <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                    <div className=' w-full h-[200px]'>
                        <Image src="/work (5).png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                    </div>
                    <div>
                        <p className=' font-semibold text-primary text-center mt-5'>E-commerce</p>
                        <p className=' mt-3 text-gray-800 text-sm text-center'>This is a Next js frontend progect.Mainly, it created for GIC D2C product sell.</p>
                    </div>
                </div>
            </a>
            <a href="https://glassmorphism-protfolio.vercel.app" target={"_blank"} rel="noreferrer">
                <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                    <div className=' w-full h-[200px]'>
                        <Image src="/work (6).png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                    </div>
                    <div>
                        <p className=' font-semibold text-primary text-center mt-5'>Glassmorphism Portfolio</p>
                        <p className=' mt-3 text-gray-800 text-sm text-center'>This is a Next js glassmorphism portfolio frontend website. It created for shocase personal works</p>
                    </div>
                </div>
            </a>
            <Link activeClass="active" to="hero-section" spy={true} smooth={true} offset={-70} duration={500}>
                <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                    <div className=' w-full h-[200px]'>
                        <Image src="/work (7).png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                    </div>
                    <div>
                        <p className=' font-semibold text-primary text-center mt-5'>Neomorphism Portfolio</p>
                        <p className=' mt-3 text-gray-800 text-sm text-center'>This is a Next js neomorphism portfolio frontend website. It created for shocase personal works</p>
                    </div>
                </div>
            </Link>


            {/* {
                !showShort &&
                <>
                
                </>
            } */}
        </div>
    )
}
