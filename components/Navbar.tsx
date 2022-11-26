import React from 'react'

export default function Navbar() {
    return (
        <div className=' w-full flex justify-center py-5'>
            <ul className=' flex items-center'>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Home</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Achievements</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>About me</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Skills</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Portfolio</li>
                <li className=' text-primary font-medium mr-5 cursor-pointer'>Feedback</li>
                <button className=' text-primary font-medium customShadow px-4 py-[6px] rounded bg-[#edeef3] hover:scale-105 transition-all duration-200 ease-linear'>Contract</button>
            </ul>
        </div>
    )
}
