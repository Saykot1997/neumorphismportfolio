import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <div className=' w-full min-h-[400px] customInsetShadow p-5 rounded-md mt-5'>
            <div className=' grid grid-cols-1 lg:grid-cols-2  max-w-[900px] mx-auto pt-8'>
                <div>
                    <p className=' text-4xl mb-2 font-bold textGradient'>Discover my Amazing</p>
                    <p className=' text-4xl font-bold textGradient'>Art Space!</p>
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
    )
}
