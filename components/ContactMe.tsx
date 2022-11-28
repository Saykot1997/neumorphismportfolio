import React from 'react'
import Image from 'next/image'

export default function ContactMe() {
    return (
        <div className=' w-full px-5 py-5 sm:py-10'>
            <div className=' max-w-[1000px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className=' w-full'>
                        <p className=' text-primary text-lg font-bold text-center mb-2'>Contact Me:</p>
                        <div>
                            <div className=' grid grid-cols-12 gap-2 my-5 items-center'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Name</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <input type="text" placeholder='Type your name here' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                            <div className=' grid grid-cols-12 gap-2 my-5 items-center'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Email</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <input type="email" placeholder='example@gamil.com' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                            <div className=' grid grid-cols-12 gap-2 my-5 items-center'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Phone</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <input type="email" placeholder='+8801837-49****' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                            <div className=' grid grid-cols-12 gap-2 mt-5'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Message</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <textarea placeholder='Message' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full'>
                        <div className=' w-full'>
                            <Image src="/contact-me.png" className=' w-full h-full ' alt="" title="" width={700} height={1000} />
                        </div>
                    </div>
                </div>
                <div className=' w-full grid grid-cols-2 gap-3 mt-10'>
                    <div className=' col-span-2 sm:col-span-1 grid grid-cols-12 gap-3'>
                        <p className=' hidden sm:block sm:col-span-2 text-blue-500 font-semibold text-right'></p>
                        <div className=' col-span-12 sm:col-span-10'>
                            <button className=' text-primary font-semibold bg-[#edeef3] w-full py-2 sm:py-3 rounded customShadow hover:scale-105 transition-all duration-200 ease-linear'>Send Message</button>
                            <p className=' px-2 mt-3 text-gray-600 text-sm text-center'>Lorem ipsum dolor sit ame doloribus vitae placeat mollitia ab.</p>
                        </div>
                    </div>
                    <div className=' col-span-2 sm:col-span-1 grid grid-cols-12 gap-3'>
                        <div className=' col-span-6'>
                            <button className=' text-primary font-semibold bg-[#edeef3] w-full py-2 sm:py-3 rounded customShadow hover:scale-105 transition-all duration-200 ease-linear'>Send Message</button>
                            <p className=' px-2 mt-3 text-gray-600 text-sm text-center'>Lorem ipsum dolor sit ame doloribus vitae placeat mollitia ab.</p>
                        </div>
                        <div className=' col-span-6'>
                            <button className=' text-primary font-semibold bg-[#edeef3] w-full py-2 sm:py-3 rounded customShadow hover:scale-105 transition-all duration-200 ease-linear'>Send Message</button>
                            <p className=' px-2 mt-3 text-gray-600 text-sm text-center'>Lorem ipsum dolor sit ame doloribus vitae placeat mollitia ab.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
