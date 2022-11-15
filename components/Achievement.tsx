import Image from 'next/image'
import React from 'react'

export default function Achievement() {
    return (
        <div className=' w-full px-5 py-20'>
            <div className=' grid grid-cols-2 max-w-[900px] mx-auto'>
                <div>
                    <div>
                        <span className=' uppercase text-blue-500 font-bold border-b-2 border-blue-500 p-[2px]'>Achievements</span>
                    </div>
                    <div className=' mt-5'>
                        <p className=' font-bold text-primary text-3xl'>{"I've"} been fortunate to work with and for people from <br /> some <span className=' text-blue-600'>amazing organizations</span> </p>
                    </div>
                    <div className=' flex mt-8'>
                        <div>
                            <div className='customShadow p-2 rounded'>
                                <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                            </div>
                        </div>
                        <div className=' ml-5 mt-5'>
                            <p className=' text-primary text-2xl font-bold'>10+</p>
                            <p className=' text-sm text-primary font-semibold'>10+ experience as well as designer, developer, maintainer</p>
                        </div>
                    </div>
                    <div className=' flex mt-5'>
                        <div>
                            <div className='customShadow p-2 rounded'>
                                <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                            </div>
                        </div>
                        <div className=' ml-5 mt-5'>
                            <p className=' text-primary text-2xl font-bold'>6,142</p>
                            <p className=' text-sm text-primary font-semibold'>10+ experience as well as designer, developer, maintainer</p>
                        </div>
                    </div>
                    <div className=' flex mt-5'>
                        <div>
                            <div className='customShadow p-2 rounded'>
                                <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                            </div>
                        </div>
                        <div className=' ml-5 mt-5'>
                            <p className=' text-primary text-2xl font-bold'>20+</p>
                            <p className=' text-sm text-primary font-semibold'>10+ experience as well as designer, developer, maintainer</p>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
