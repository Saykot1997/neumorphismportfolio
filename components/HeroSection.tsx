import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function HeroSection() {

    return (
        <div id='hero-section' className=' w-full'>
            <div className=' w-full min-h-[400px] mt-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center customInsetShadow py-5 sm:py-10 px-5 sm:px-10 md:px-20 rounded-md max-w-[1200px] h-full mx-auto'>
                    <div>
                        <div className=' text-lg sm:text-2xl md:text-4xl mb-2 font-bold textGradient'>
                            <TypeAnimation
                                sequence={[
                                    "H", 500, "Hi", 500, "Hi, I", 500, "Hi, I a", 500, "Hi, I am", 500, "Hi, I am S", 500, "Hi, I am Sa", 500, "Hi, I am Say", 500, "Hi, I am Sayk", 500, "Hi, I am Sayko", 500, "Hi, I am Saykot", 500, "Hi, I am Saykot H", 500, "Hi, I am Saykot Ho", 500, "Hi, I am Saykot Hos", 500, "Hi, I am Saykot Hoss", 500, "Hi, I am Saykot Hossa", 500, "Hi, I am Saykot Hossai", 500, "Hi, I am Saykot Hossain", 500,

                                    () => {
                                        // console.log('Done typing!');
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </div>
                        <p className=' text-lg sm:text-2xl md:text-4xl font-bold textGradient'>MERN Stack Developer</p>
                        <div className=' flex items-center mt-4 sm:mt-8 sm:text-base text-sm'>
                            <p className='textGradient font-semibold'>{"<code>"}</p>
                            <p className=' border-x-[3px] border-primary px-1 mx-1'>build logs and</p>
                            <p className='textGradient font-semibold'>{"<code>"}</p>
                        </div>
                        <div className=' mt-5 sm:mt-8'>
                            <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
                                <button className=' text-primary font-semibold bg-[#edeef3] px-2 sm:px-4 py-1 sm:py-2 rounded customShadow hover:scale-105 transition-all duration-200 ease-linear'>Explore Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className=''>
                        <div className=' w-[250px] sm:w-[300px] h-[280px] sm:h-[320px]'>
                            <Image src="/saykot.png" alt="" className=' w-full h-full' title="" width={300} height={200} layout="responsive" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
