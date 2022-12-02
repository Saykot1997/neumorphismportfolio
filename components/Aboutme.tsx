import React from 'react'
import Image from 'next/image'

export default function Aboutme() {
    return (
        <div id='about-me' className=' w-full px-5 py-5 sm:py-10'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-[1000px] mx-auto'>
                <div className=' w-full h-[300px] sm:w-[420px] sm:h-[400px]'>
                    <div className=' w-full h-full customShadow2 rounded-md p-2 bg-white border-white hover:scale-105 hover:rotate-2 transition-all ease-in duration-200'>
                        <Image src="/saykot1.jpg" className=' rounded-md h-full w-full' alt="" title="" width={700} height={1000} />
                    </div>
                </div>
                <div>
                    <p className=' text-primary text-xl sm:text-2xl font-bold'>About Me</p>
                    <p className=' text-primary sm:text-lg mt-2 sm:mt-3 font-semibold'>Saykot Hossain</p>
                    <p className=' text-primary sm:text-lg font-semibold textGradient'>Full Stack Web Developer || Devops Engineer</p>
                    <span className=' my-2 inline-block w-80 h-[2px] bg-gray-300'></span>
                    <p><span className=' text-primary font-bold mb-1'>Residence:</span> Borpa, Bhulta, Rupgonj, Narayangonj</p>
                    <p><span className=' text-primary font-bold'>Work at :</span> Purple Algoritham Ltd. - <span className=' text-sm font-medium'>Junior Web Developer</span></p>
                    {/* <p><span className=' text-primary font-bold'>City:</span> Narayangonj</p> */}
                    {/* <p><span className=' text-primary font-bold'>Age:</span> 25</p> */}
                    <p className=' mt-2 text-sm text-primary'>I am Saykot Hossain Shohel MERN stack web developer. I love new technology to learn and implement in projects. I have clear knowledge of software developement life cycle and have working experience on both frontend and backend also some devops tools. Primarily, I work on Javasctipt but have basic knowledge on several programing languages like python and php.</p>
                    <div className=' flex gap-2 flex-wrap mt-3'>
                        {/* <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>HTML</button> */}
                        {/* <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>CSS</button> */}
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Tailwind</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>React</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Next</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Node</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Express</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Mongodb</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Linux</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Docker</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Kubernetes</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Jenkins</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Ansible</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Terraform</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>Nagios</button>
                        <button className=' customShadow2 py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500 hover:scale-105 transition-all duration-200 ease-linear'>AWS</button>
                    </div>
                    <div className=' mt-5'>
                        <a href="Personal CV.pdf" download>
                            <button className='customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-gray-700 hover:scale-105 transition-all duration-200 ease-linear'>Download CV</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
