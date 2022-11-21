import React from 'react'
import Image from 'next/image'

export default function Aboutme() {
    return (
        <div className=' w-full px-5 py-20'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-[900px] mx-auto'>
                <div>
                    <div className='customShadow rounded-md p-2 bg-white border-white'>
                        <Image src="/saykot1.jpg" className=' rounded-md' alt="" title="" width={700} height={100} />
                    </div>
                </div>
                <div>
                    <p className=' text-primary text-2xl font-bold'>About Me</p>
                    <p className=' text-primary text-lg mt-3 font-semibold'>Saykot Hossain</p>
                    <p className=' text-primary text-lg font-semibold textGradient'>Full Stack Web Developer || Devops Engineer</p>
                    <span className=' my-2 inline-block w-80 h-[2px] bg-gray-300'></span>
                    <p><span className=' text-primary font-bold'>Residence:</span> Bhulta, Rupgonj</p>
                    <p><span className=' text-primary font-bold'>City:</span> Narayangonj</p>
                    <p><span className=' text-primary font-bold'>Age:</span> 25</p>
                    <p className=' mt-2 text-sm text-primary'>As a Full Stack Web Developer I have clear knowledge of software development life cycle. The frontend technologies includes Tailwind CSS, React js, Next js to build appearing user interface. The backend technologies includes Node js, Express js and Mongodb to build secure API or backend system. The oparation technologies includes Docker, Kubernetes, Jenkins, Ansible and Linux to deploy the application to use or access the end user. The skill to implement CI/CD pipeline to boost the software development life cycle.</p>
                    <div className=' flex gap-2 flex-wrap mt-3'>
                        {/* <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>HTML</button> */}
                        {/* <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>CSS</button> */}
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Tailwind</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>React</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Next</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Node</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Express</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Mongodb</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Linux</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Docker</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Kubernetes</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Jenkins</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Ansible</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Terraform</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>Nagios</button>
                        <button className=' customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-blue-500'>AWS</button>
                    </div>
                    <div className=' mt-5'>
                        <button className='customShadow py-1 px-3 rounded bg-gray-100 font-semibold text-gray-700'>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
