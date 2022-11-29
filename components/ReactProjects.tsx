import Image from 'next/image'
import React from 'react'

interface PropsType {
    showShort: boolean;
}


export default function ReactProjects({ showShort }: PropsType) {
    return (
        <div className=' mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
            <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                <div className=' w-full h-[200px]'>
                    <Image src="/work (1).png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                </div>
                <div>
                    <p className=' font-semibold text-primary text-center mt-5'>Air ticketing</p>
                    <p className=' mt-3 text-gray-800 text-sm text-center'>This is a react frontend progect. It is a clone of Flightexpart website .Primarily create for GIC then stop developing</p>
                </div>
            </div>
            <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                <div className=' w-full h-[200px]'>
                    <Image src="/work (5).png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                </div>
                <div>
                    <p className=' font-semibold text-primary text-center mt-5'>E-commerce</p>
                    <p className=' mt-3 text-gray-800 text-sm text-center'>This is a react e-commerce frontend website.Mainly, it created for GIC D2C product sell.</p>
                </div>
            </div>
            <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                <div className=' w-full h-[200px]'>
                    <Image src="/work13.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                </div>
                <div>
                    <p className=' font-semibold text-primary text-center mt-5'>Rocket Info</p>
                    <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose react rockte info show website.Mainly, it created for increase designe skills.</p>
                </div>
            </div>

            {
                !showShort &&
                <>
                    <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                        <div className=' w-full h-[200px]'>
                            <Image src="/work11.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                        </div>
                        <div>
                            <p className=' font-semibold text-primary text-center mt-3'>React Frontend</p>
                            <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose react frontend website.Mainly, it created for increase designe skills</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
