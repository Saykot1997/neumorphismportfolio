import Image from 'next/image'
import React from 'react'

export default function Portfolio() {
    return (
        <div className=' w-full px-5 py-5 sm:py-10'>
            <div className=' max-w-[1000px] mx-auto'>
                <div className=' w-full flex flex-col justify-center  items-center'>
                    <span className=' text-blue-500 font-bold text-2xl   '>PORTFOLIOS</span>
                    <span className=' w-36 h-[2px] bg-blue-400 inline-block'></span>
                </div>
                <div className=' w-full flex justify-center'>
                    <div className='bg-gray-100 p-2 rounded customShadow flex items-center mt-10'>
                        <span className=' inline-block font-semibold px-5  cursor-pointer customInsetShadow2'>HTML</span>
                        <span className=' inline-block font-semibold px-5 border-r border-primary cursor-pointer'>CSS</span>
                        <span className=' inline-block font-semibold px-5 border-r border-primary cursor-pointer'>React js</span>
                        <span className=' inline-block font-semibold px-5 border-r border-primary cursor-pointer'>Next js</span>
                        <span className=' inline-block font-semibold px-5 cursor-pointer'>Node js</span>
                    </div>
                </div>
                <div className=' mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work5.png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-5'>Test</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut sed amet fugit eos.</p>
                        </div>
                    </div>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work6.png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-5'>Test</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut sed amet fugit eos.</p>
                        </div>
                    </div>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work7.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-5'>Test</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut sed amet fugit eos.</p>
                        </div>
                    </div>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work8.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-3'>Test</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut sed amet fugit eos.</p>
                        </div>
                    </div>
                </div>
                <div className=' w-full flex justify-center items-center mt-5'>
                    <button className=' py-2 px-8 text-primary font-semibold customShadow bg-gray-100 rounded-md hover:scale-105 transition-all duration-200 ease-linear'>Shwo More</button>
                </div>
            </div>
        </div>
    )
}
