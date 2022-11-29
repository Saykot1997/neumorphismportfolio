import Image from 'next/image'
import React from 'react'

interface PropsType {
    showShort: boolean;
}


export default function MERNProjects({ showShort }: PropsType) {
    return (
        <div className=' mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
            <a href="https://glassmorphism-protfolio.vercel.app/works/dataAutomation" target={"_blank"} rel="noreferrer" className=' block w-full h-full'>
                <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                    <div className=' w-full h-[200px]'>
                        <Image src="/work (2).png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                    </div>
                    <div>
                        <p className=' font-semibold text-primary text-center mt-3'>Client Data Automation</p>
                        <p className=' mt-3 text-gray-800 text-sm text-center'>This is a gic inhouse client data automation.Mainly, it created for increase productibity of employe of gic and store all client data in a centaral database like mongodb</p>
                    </div>
                </div>
            </a>
            <a href="https://glassmorphism-protfolio.vercel.app/works/excelAutomation" target={"_blank"} rel="noreferrer" className=' block w-full h-full'>
                <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                    <div className=' w-full h-[200px]'>
                        <Image src="/work14.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                    </div>
                    <div>
                        <p className=' font-semibold text-primary text-center mt-3'>Excel Automation</p>
                        <p className=' mt-3 text-gray-800 text-sm text-center'>This is a gic inhouse excel data automation.Mainly, it created for increase productibity of employe of gic</p>
                    </div>
                </div>
            </a>
            <a href="https://glassmorphism-protfolio.vercel.app/works/facebookClone" target={"_blank"} rel="noreferrer" className=' block w-full h-full'>
                <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                    <div className=' w-full h-[200px]'>
                        <Image src="/work3.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                    </div>
                    <div>
                        <p className=' font-semibold text-primary text-center mt-3'>Social App</p>
                        <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose MERN Social App.Mainly, it created for increase designe and logic skills</p>
                    </div>
                </div>
            </a>


            {
                !showShort &&
                <>
                    <a href="https://glassmorphism-protfolio.vercel.app/works/blog" target={"_blank"} rel="noreferrer" className=' block w-full h-full'>
                        <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                            <div className=' w-full h-[200px]'>
                                <Image src="/work1.png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                            </div>
                            <div>
                                <p className=' font-semibold text-primary text-center mt-5'>MERN Blog App</p>
                                <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose MERN Blog App.Mainly, it created for increase designe and logic skills</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://glassmorphism-protfolio.vercel.app/works/flipkart" target={"_blank"} rel="noreferrer" className=' block w-full h-full'>
                        <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                            <div className=' w-full h-[200px]'>
                                <Image src="/work2.png" className=' rounded-md w-full h-full object-cover' alt="" title="" width={700} height={300} />
                            </div>
                            <div>
                                <p className=' font-semibold text-primary text-center mt-5'>E-commerce Frontend</p>
                                <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose React Frontend .Mainly, it created for increase designe and logic skills</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://glassmorphism-protfolio.vercel.app/works/flipkartAdmin" target={"_blank"} rel="noreferrer" className=' block w-full h-full'>
                        <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                            <div className=' w-full h-[200px]'>
                                <Image src="/work12.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                            </div>
                            <div>
                                <p className=' font-semibold text-primary text-center mt-5'>E-commerce Admin Panel</p>
                                <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose React Admin Panel .Mainly, it created for increase designe and logic skills</p>
                            </div>
                        </div>
                    </a>
                    <a href="https://glassmorphism-protfolio.vercel.app/works/agentList" target={"_blank"} rel="noreferrer" className=' block w-full h-full'>
                        <div className='customShadow hover:scale-105 transition-all duration-200 ease-linear cursor-pointer w-full px-2 pb-5 pt-2  rounded-md bg-gray-100'>
                            <div className=' w-full h-[200px]'>
                                <Image src="/work10.png" className=' rounded-md w-full h-full object-cover ' alt="" title="" width={700} height={300} />
                            </div>
                            <div>
                                <p className=' font-semibold text-primary text-center mt-3'>Agent Management</p>
                                <p className=' mt-3 text-gray-800 text-sm text-center'>This is a testing purpose MERN agent management app.Mainly, it created for increase designe skills</p>
                            </div>
                        </div>
                    </a>

                </>
            }
        </div>
    )
}
