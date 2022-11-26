import Image from 'next/image'
import React, { useState } from 'react'

export default function Education() {
    const [showWork, setShowWork] = useState<"education" | "experience">("education")
    const toggleShowWork = (option: "education" | "experience") => {
        setShowWork(option)
    }
    return (
        <div className=' w-full px-5 py-10'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 max-w-[900px] mx-auto'>
                <div>
                    <div className=' flex gap-5'>
                        <span onClick={() => toggleShowWork("education")} className={` uppercase font-bold transition-all ease-linear duration-200 cursor-pointer  p-[2px] ${showWork === "education" && "text-blue-500 border-b-2 border-blue-500"} `}>Educations</span>
                        <span onClick={() => toggleShowWork("experience")} className={` uppercase font-bold transition-all ease-linear duration-200 cursor-pointer  p-[2px] ${showWork === "experience" && "text-blue-500 border-b-2 border-blue-500"} `}>Experience</span>
                    </div>

                    <div className=' pr-20'>
                        {
                            showWork === "education" ?
                                <>
                                    <div className=' flex mt-8'>
                                        <div>
                                            <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                                <Image src="/mortarboard.png" alt="" title="" width={40} height={40} />
                                            </div>
                                        </div>
                                        <div className=' ml-5 mt-3'>
                                            <p className=' text-primary text-xl font-bold'>Bachelor of Arts in English</p>
                                            <p className=' text-sm text-primary font-semibold'>Victoria University of Bangladesh</p>
                                            <p className=' text-[12px] text-primary font-semibold'>Pranthopath, Dhaka</p>
                                        </div>
                                    </div>
                                    <div className=' flex mt-5'>
                                        <div>
                                            <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                                <Image src="/mortarboard.png" alt="" title="" width={40} height={40} />
                                            </div>
                                        </div>
                                        <div className=' ml-5 mt-3'>
                                            <p className=' text-primary text-xl font-bold'>Higher Secondary Certificate</p>
                                            <p className=' text-sm text-primary font-semibold'>Bhulta High School and Collage</p>
                                            <p className=' text-[12px] text-primary font-semibold'>Bhulta, Rupgonj, Narayangonj</p>
                                        </div>
                                    </div>
                                    <div className=' flex mt-5'>
                                        <div>
                                            <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                                <Image src="/mortarboard.png" alt="" title="" width={40} height={40} />
                                            </div>
                                        </div>
                                        <div className=' ml-5 mt-3'>
                                            <p className=' text-primary text-xl font-bold'>Secondary School Certificate</p>
                                            <p className=' text-sm text-primary font-semibold'>Parabo Ideal High School</p>
                                            <p className=' text-[12px] text-primary font-semibold'>Parabo, Sonargaon, Narayangonj</p>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className=' flex mt-8'>
                                        <div>
                                            <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                                <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                                            </div>
                                        </div>
                                        <div className=' ml-5 mt-3'>
                                            <p className=' text-primary text-xl font-bold'>Junior Web Developer</p>
                                            <p className=' text-sm text-primary font-semibold'>Purple Algoritham</p>
                                            <p className=' text-[12px] text-primary font-semibold'>Gulshan 1, Dhaka</p>
                                            <p className=' text-[12px] text-primary font-semibold'>From April 2023 - To Present</p>
                                        </div>
                                    </div>
                                    <div className=' flex mt-5'>
                                        <div>
                                            <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                                <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                                            </div>
                                        </div>
                                        <div className=' ml-5 mt-3'>
                                            <p className=' text-primary text-xl font-bold'>Responsibility</p>
                                            <p className=' text-[12px] text-primary font-semibold'>Create frontend app using Tailwind CSS, React js, Next js and Make responsive designe</p>

                                        </div>
                                    </div>
                                    <div className=' flex mt-5'>
                                        <div>
                                            <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                                <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                                            </div>
                                        </div>
                                        <div className=' ml-5 mt-3'>
                                            <p className=' text-primary text-xl font-bold'>Responsibility</p>
                                            <p className=' text-[12px] text-primary font-semibold'>Create secure backend api using Node js, Express js, Mongodeb, Mongoose, Json Web Token etc.</p>
                                        </div>
                                    </div>
                                    <div className=' flex mt-5'>
                                        <div>
                                            <div className='customShadow cursor-pointer hover:scale-105 transition-all ease-linear duration-150 flex justify-center items-center h-12 w-12 p-2 rounded'>
                                                <Image src="/programmer.png" alt="" title="" width={40} height={40} />
                                            </div>
                                        </div>
                                        <div className=' ml-5 mt-3'>
                                            <p className=' text-primary text-xl font-bold'>Responsibility</p>
                                            <p className=' text-[12px] text-primary font-semibold'>Deploy app in server and maintain.</p>
                                        </div>
                                    </div>

                                </>
                        }
                    </div>
                </div>
                <div>
                    <div className='customShadow2 rounded-md p-2 bg-white border-white w-[500px] h-[400px]'>
                        {
                            showWork === "education" ?
                                <Image src="/graduation.jpg" alt="" title="" width={600} height={400} className="w-full h-full" />
                                :
                                <Image src="/work.png" alt="" title="" width={600} height={400} className=" w-full h-full" />

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
