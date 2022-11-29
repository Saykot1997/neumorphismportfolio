import Image from 'next/image'
import React from 'react'

export default function Achievement() {
    return (
        <div id='achievement' className=' w-full px-5 py-10'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 max-w-[1000px] mx-auto items-center'>
                <div>
                    <div>
                        <span className=' uppercase text-blue-500 font-bold border-b-2 border-blue-500 p-[2px]'>Achievements</span>
                    </div>
                    <div className=' mt-5'>
                        <p className=' font-bold text-primary text-lg sm:text-xl md:text-3xl'>{"I've"} been fortunate to work with and for people from <br /> some <span className=' text-blue-600'>amazing organizations</span> </p>
                    </div>
                    <div className=' pr-0 sm:pr-10 md:pr-20'>
                        <div className=' flex mt-8'>
                            <div>
                                <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                    <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                                </div>
                            </div>
                            <div className=' ml-5 mt-3'>
                                <p className=' text-primary text-2xl font-bold'>1+</p>
                                <p className=' text-[12px] sm:text-sm text-primary font-semibold'>1+ experience as well as designer, developer, maintainer</p>
                            </div>
                        </div>
                        <div className=' flex mt-5'>
                            <div>
                                <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                    <Image src="/celebration.png" alt="" title="" width={40} height={40} />
                                </div>
                            </div>
                            <div className=' ml-5 mt-3'>
                                <p className=' text-primary text-2xl font-bold'>6,142</p>
                                <p className=' text-[12px] sm:text-sm text-primary font-semibold'>Happy customers worldwide working with 100% client satisfaction and glorious </p>
                            </div>
                        </div>
                        <div className=' flex mt-5'>
                            <div>
                                <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                    <Image src="/trophy (1).png" alt="" title="" width={24} height={24} />
                                </div>
                            </div>
                            <div className=' ml-5 mt-3'>
                                <p className=' text-primary text-2xl font-bold'>20+</p>
                                <p className=' text-[12px] sm:text-sm text-primary font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad suscipit </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' hidden sm:flex items-center justify-center h-full w-full'>
                    <div className=' relative w-[300px] sm:min-w-[470px] h-[300px] sm:min-h-[470px] flex justify-center items-center'>

                        {/* next js */}
                        <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center bg-gray-100 items-center h-20 sm:h-40 w-20 sm:w-40 p-2 rounded-full'>
                            <Image src="/nextjs.png" alt="" title="" width={100} height={100} />
                        </div>
                        {/* node */}
                        <div className=' absolute bottom-16 right-32 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-10 sm:h-20 w-10 sm:w-20 p-2 rounded-full'>
                            <Image src="/node.png" alt="" title="" width={100} height={100} />
                        </div>
                        {/* react */}
                        <div className=' absolute top-44 right-20 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-8 sm:h-12 w-8 sm:w-12 p-2 rounded-full'>
                            <Image src="/react.png" alt="" title="" width={100} height={100} />
                        </div>
                        {/* jenkins */}
                        <div className=' absolute top-20 right-1/2 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-16 w-16 p-2 rounded-full'>
                            <Image src="/jenkins.png" alt="" title="" width={40} height={40} />
                        </div>
                        {/* tailwind */}
                        <div className=' absolute top-28 left-16 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-20 w-20 p-2 rounded-full'>
                            <Image src="/tailwind.png" alt="" title="" width={60} height={60} />
                        </div>
                        {/* mongodv */}
                        <div className=' absolute top-52 left-16 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-14 w-14 p-2 rounded-full'>
                            <Image src="/mdb.png" alt="" title="" width={60} height={60} />
                        </div>
                        {/* kubernetis */}
                        <div className=' absolute top-20 right-28 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-20 w-20 p-2 rounded-full'>
                            <Image src="/kubernetis.png" className=' -translate-y-[2px]' alt="" title="" width={60} height={60} />
                        </div>
                        {/* docker */}
                        <div className=' absolute bottom-28 left-20 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-16 w-16 p-2 rounded-full'>
                            <Image src="/docker.png" className='' alt="" title="" width={60} height={60} />
                        </div>
                        {/* ec2 */}
                        <div className=' absolute bottom-16 left-40 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-16 w-16 p-2 rounded-full'>
                            <Image src="/ec2.png" className='' alt="" title="" width={60} height={60} />
                        </div>
                        {/* ec2 */}
                        <div className=' absolute bottom-40 right-16 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-16 w-16 p-2 rounded-full'>
                            <Image src="/ansible.png" className='' alt="" title="" width={60} height={60} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
