import Image from 'next/image'
import React, { useState } from 'react'
import APIProjects from './APIProjects';
import HTMLProjects from './HTMLProjects';
import MERNProjects from './MERNProjects';
import NextProjects from './NextProjects';
import ReactProjects from './ReactProjects';


export default function Portfolio() {

    const [workCat, setWorkCat] = useState("react");
    const [showShort, setShowShort] = useState(true)
    const toggleShowShort = () => {
        setShowShort(!showShort)
    }
    const toggleWorkCat = (value: string) => {
        setWorkCat(value)
    }

    return (
        <div id='portfolio' className=' w-full px-5 py-5 sm:py-10'>
            <div className=' max-w-[1000px] mx-auto'>
                <div className=' w-full flex flex-col justify-center items-center'>
                    <span className=' text-blue-500 font-bold sm:text-lg md:text-2xl'>PORTFOLIOS</span>
                    <span className=' w-24 sm:w-36 h-[2px] bg-blue-400 inline-block'></span>
                </div>
                <div className=' w-full flex justify-center'>
                    <div className='bg-gray-100 p-2 rounded customShadow flex items-center mt-5 sm:mt-10'>
                        <span onClick={() => toggleWorkCat("html")} className={` inline-block sm:text-base text-sm font-semibold px-2 sm:px-5  cursor-pointer ${workCat === "html" ? "customInsetShadow2" : "border-r border-primary"}`}>HTML</span>
                        <span onClick={() => toggleWorkCat("react")} className={` inline-block sm:text-base text-sm font-semibold px-2 sm:px-5 cursor-pointer ${workCat === "react" ? "customInsetShadow2" : "border-r border-primary"}`}>React</span>
                        <span onClick={() => toggleWorkCat("next")} className={` inline-block sm:text-base text-sm font-semibold px-2 sm:px-5 ${workCat === "next" ? "customInsetShadow2" : "border-r border-primary"} cursor-pointer`}>Next</span>
                        <span onClick={() => toggleWorkCat("api")} className={` inline-block sm:text-base text-sm font-semibold px-2 sm:px-5 ${workCat === "api" ? "customInsetShadow2" : "border-r border-primary"} cursor-pointer`}>API</span>
                        <span onClick={() => toggleWorkCat("mern")} className={` inline-block sm:text-base text-sm font-semibold px-2 sm:px-5  cursor-pointer ${workCat === "mern" ? "customInsetShadow2" : ""}`}>MERN</span>
                    </div>
                </div>
                {
                    workCat === "html" &&
                    <HTMLProjects showShort={showShort} />
                }
                {
                    workCat === "react" &&
                    <ReactProjects showShort={showShort} />
                }
                {
                    workCat === "api" &&
                    <APIProjects showShort={showShort} />
                }
                {
                    workCat === "next" &&
                    <NextProjects showShort={showShort} />
                }
                {
                    workCat === "mern" &&
                    <MERNProjects showShort={showShort} />
                }
                <div className=' w-full flex justify-center items-center  mt-10'>
                    {
                        showShort ?
                            <button onClick={toggleShowShort} className=' py-1 sm:py-2 px-4 sm:px-8 text-primary font-semibold customShadow bg-gray-100 rounded-md hover:scale-105 transition-all duration-200 ease-linear'>Shwo More</button>
                            :
                            <button onClick={toggleShowShort} className=' py-1 sm:py-2 px-4 sm:px-8 text-primary font-semibold customShadow bg-gray-100 rounded-md hover:scale-105 transition-all duration-200 ease-linear'>Shwo Less</button>
                    }
                </div>
            </div>
        </div>
    )
}
