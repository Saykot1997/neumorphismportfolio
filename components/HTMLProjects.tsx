import Image from 'next/image'
import React from 'react'

export default function HTMLProjects({ showShort }) {
    return (
        <div className=' mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
            <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                <div className=' w-full h-[200px]'>
                    <Image src="/work5.png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                </div>
                <div>
                    <p className=' font-semibold text-primary text-center mt-5'>E-commerce</p>
                    <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose html static e-commerce website.Mainly, it created for increase designe skills </p>
                </div>
            </div>
            <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                <div className=' w-full h-[200px]'>
                    <Image src="/work6.png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                </div>
                <div>
                    <p className=' font-semibold text-primary text-center mt-5'>Watch Shop</p>
                    <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose html static watch shop website.Mainly, it created for increase designe skills.</p>
                </div>
            </div>
            <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                <div className=' w-full h-[200px]'>
                    <Image src="/work7.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                </div>
                <div>
                    <p className=' font-semibold text-primary text-center mt-5'>Book Shop</p>
                    <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose html static book shop website.Mainly, it created for increase designe skills.</p>
                </div>
            </div>

            {
                !showShort &&
                <>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work8.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-3'>Barber Shop</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose html static baarber shop website.Mainly, it created for increase designe skills</p>
                        </div>
                    </div>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work9.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-3'>Glassmorphism Animation</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose html static glassmorphism animated website.Mainly, it created for increase designe skills</p>
                        </div>
                    </div>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work4.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-3'>App Loading</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose html static app loading website.Mainly, it created for increase designe skills</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
