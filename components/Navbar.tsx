import React, { useEffect, useState } from 'react'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(0)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener("resize", function () {
            setWidth(this.innerWidth)
        })
    }, [])


    return (
        <div className=' w-full fixed top-0 left-0 bg flex justify-center py-5 bg-[#e9f1fb] z-[1000]'>
            <ul className=' hidden sm:flex items-center'>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Home</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Achievements</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>About me</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Skills</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Portfolio</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Feedback</li>
                <button className=' text-primary font-medium customShadow px-2 sm:px-4 py-1 sm:py-[6px] rounded bg-[#edeef3] hover:scale-105 transition-all duration-200 ease-linear'>Contract</button>
            </ul>
            <div onClick={toggleIsOpen} className=' w-full flex justify-end items-center sm:hidden px-5'>
                <button className=' text-primary font-medium customShadow px-2 sm:px-4 py-1 sm:py-[6px] rounded bg-[#edeef3] hover:scale-105 transition-all duration-200 ease-linear'>Menu</button>
            </div>
            {width < 640 && isOpen &&
                <ul className=' fixed top-0 left-0 w-screen h-screen bg-[#e9f1fb] flex flex-col gap-5 pt-10 text-center'>
                    <div className=' flex justify-center items-center absolute top-3 right-8'>
                        <button onClick={toggleIsOpen} className=' text-primary font-medium customShadow px-2 sm:px-4 py-1 sm:py-[6px] rounded bg-[#edeef3] hover:scale-105 transition-all duration-200 ease-linear'>Close</button>
                    </div>
                    <li className=' text-primary hover:text-gray-400 font-medium mr-5 cursor-pointer'>Home</li>
                    <li className=' text-primary hover:text-gray-400 font-medium mr-5 cursor-pointer'>Achievements</li>
                    <li className=' text-primary hover:text-gray-400 font-medium mr-5 cursor-pointer'>About me</li>
                    <li className=' text-primary hover:text-gray-400 font-medium mr-5 cursor-pointer'>Skills</li>
                    <li className=' text-primary hover:text-gray-400 font-medium mr-5 cursor-pointer'>Portfolio</li>
                    <li className=' text-primary hover:text-gray-400 font-medium mr-5 cursor-pointer'>Feedback</li>
                    <div className=' flex justify-center items-center'>
                        <button className=' text-primary -translate-x-2 font-medium customShadow px-2 sm:px-4 py-1 sm:py-[6px] rounded bg-[#edeef3] hover:scale-105 transition-all duration-200 ease-linear'>Contract</button>
                    </div>
                </ul>
            }

        </div>
    )
}
