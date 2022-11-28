import Image from 'next/image'
import React from 'react'

export default function ClientFeedBack() {
    return (
        <div className=' hidden sm:block w-full px-5 py-10'>
            <div className='  max-w-[1000px] mx-auto'>
                <div className=' flex justify-center items-center'>
                    <span className=' text-xl text-primary font-bold border-b-2 border-gray-300 py-1'>Clients Feedback</span>
                </div>
                <div className=' flex items-center justify-center h-full w-full'>
                    <div className=' relative  w-[600px] min-h-[600px] flex justify-center items-center'>

                        {/* center client*/}
                        <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 items-center h-[300px] w-[300px] p-4 rounded-full'>
                            <div className=' w-full flex justify-center mt-3'>
                                <div className=' flex justify-center  h-16 w-16 border-4 border-white rounded-full overflow-hidden'>
                                    <Image src="/client/client (1).png" alt="" title="" width={60} height={60} className="h-full w-full rounded-full object-cover" />
                                </div>
                            </div>
                            <p className='text-blue-500 text-sm text-center font-medium'>Robert Jenson</p>
                            <Image src="/quotation.png" alt="" title="" width={20} height={20} className=" ml-5 mt-3" />
                            <p className=' text-center px-2 text-[12px] text-gray-500 font-medium mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.as itaque commodi ex quisquam.</p>
                            <div className=' flex justify-end'>
                                <Image src="/quotation (1).png" alt="" title="" width={20} height={20} className=" mt-1 mr-5" />
                            </div>
                            <p className=' text-center text-sm text-primary font-medium'>Jhon Doe</p>
                            <p className=' text-center text-[12px] text-gray-500 font-medium'>Lorem ipsum dolor</p>
                        </div>

                        <div className=' absolute bottom-32 right-20 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-20 w-20 p-2 rounded-full overflow-hidden'>
                            <Image src="/client/client (2).png" alt="" title="" width={100} height={100} className="w-full h-full rounded-full" />
                        </div>

                        <div className=' absolute top-52 right-10 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-20 w-20 p-2 rounded-full'>
                            <Image src="/client/client (3).png" alt="" title="" width={100} height={100} className="w-full h-full rounded-full" />
                        </div>

                        <div className=' absolute top-20 right-32 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-16 w-16 p-2 rounded-full'>
                            <Image src="/client/client (4).png" alt="" title="" width={40} height={40} className="w-full h-full rounded-full" />
                        </div>

                        <div className=' absolute bottom-32 left-20 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-20 w-20 p-2 rounded-full overflow-hidden'>
                            <Image src="/client/client (5).png" alt="" title="" width={100} height={100} className="w-full h-full rounded-full" />
                        </div>

                        <div className=' absolute top-52 left-10 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-20 w-20 p-2 rounded-full'>
                            <Image src="/client/client (6).png" alt="" title="" width={100} height={100} className="w-full h-full rounded-full" />
                        </div>

                        <div className=' absolute top-20 left-32 customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 bg-gray-100 flex justify-center items-center h-16 w-16 p-2 rounded-full'>
                            <Image src="/client/client (1).png" alt="" title="" width={40} height={40} className="w-full h-full rounded-full" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
