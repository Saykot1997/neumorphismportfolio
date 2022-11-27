import Image from 'next/image'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {

    return (
        <div className=' w-full'>
            <div className=' w-full min-h-[400px] mt-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center customInsetShadow py-10 px-20 rounded-md max-w-[1200px] h-full mx-auto'>
                    <div>
                        <div className=' text-4xl mb-2 font-bold textGradient'>
                            <TypeAnimation
                                sequence={[
                                    "H", 500, "Hi", 500, "Hi, I", 500, "Hi, I a", 500, "Hi, I am", 500, "Hi, I am S", 500, "Hi, I am Sa", 500, "Hi, I am Say", 500, "Hi, I am Sayk", 500, "Hi, I am Sayko", 500, "Hi, I am Saykot", 500, "Hi, I am Saykot H", 500, "Hi, I am Saykot Ho", 500, "Hi, I am Saykot Hos", 500, "Hi, I am Saykot Hoss", 500, "Hi, I am Saykot Hossa", 500, "Hi, I am Saykot Hossai", 500, "Hi, I am Saykot Hossain", 500,

                                    () => {
                                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                            // style={{ fontSize: '2em' }}
                            // className="text-4xl mb-2 font-bold textGradient"
                            />
                        </div>
                        {/* <p className=' text-4xl mb-2 font-bold textGradient'>Hi, I am Saykot Hossain</p> */}
                        <p className=' text-4xl font-bold textGradient'>MERN Stack Developer</p>
                        <div className=' flex items-center mt-8'>
                            <p className='textGradient font-semibold'>{"<code>"}</p>
                            <p className=' border-x-[3px] border-primary px-1 mx-1'>build logs and</p>
                            <p className='textGradient font-semibold'>{"<code>"}</p>
                        </div>
                        <div className=' mt-8'>
                            <button className=' text-primary font-semibold bg-[#edeef3] py-2 px-4 rounded customShadow hover:scale-105 transition-all duration-200 ease-linear'>Explore Now</button>
                        </div>
                    </div>
                    <div className=''>
                        <div className=' w-[300px] h-[320px]'>
                            <Image src="/saykot.png" alt="" className=' w-full h-full' title="" width={300} height={200} layout="responsive" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
