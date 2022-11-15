import React from 'react'

export default function Navbar() {
    return (
        <div className=' w-full flex justify-center py-5'>
            <ul className=' flex items-center'>
                <li className=' text-primary font-medium mr-5'>Home</li>
                <li className=' text-primary font-medium mr-5'>Achievements</li>
                <li className=' text-primary font-medium mr-5'>About me</li>
                <li className=' text-primary font-medium mr-5'>Skills</li>
                <li className=' text-primary font-medium mr-5'>Portfolio</li>
                <li className=' text-primary font-medium mr-5'>Feedback</li>
                <button className=' text-primary font-medium customShadow px-4 py-[6px] rounded bg-[#edeef3]'>Contract</button>
            </ul>
        </div>
    )
}
