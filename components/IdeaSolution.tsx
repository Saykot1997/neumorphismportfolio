import React from 'react'
import Image from 'next/image'

export default function ContactMe() {
    return (
        <div className=' w-full px-5 py-5 sm:py-10'>
            <div className=' max-w-[1200px] mx-auto'>
                <div className='  bg-[#edeef3] w-full pt-5 sm:pt-7 px-5 md:px-10 pb-5 rounded-md customShadow'>
                    <p className=' text-primary font-bold text-center text-lg sm:text-xl md:text-2xl'>Brilent solution For your ideas</p>
                    <p className=' text-gray-700 text-[12px] sm:text-sm text-center mt-1'>You plan the idea and I will execute them in code.</p>
                    <div className=' w-full h-4 border-t-2 border-dashed border-primary my-5 sm:my-8'></div>
                    <div className=' grid grid-cols-10 gap-3'>
                        <div className=' col-span-10 sm:col-span-4'>
                            <p className=' text-primary font-semibold'>About me</p>
                            <p className=' mt-2 text-sm text-primary'>As a Full Stack Web Developer I have clear knowledge of software development life cycle.The frontend technologies to build appearing user interface. The backend technologies to build secure API or backend system. The oparation technologies to deploy or host the application to use or access the end user. The skill to implement CI/CD pipeline to boost the software development life cycle.</p>
                        </div>
                        <div className=' col-span-5 sm:col-span-2'>
                            <p className=' text-primary font-semibold'>Frontend</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>HTML</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>CSS</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Tailwind CSS</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Javascript</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>React js</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Typescript</p>

                        </div>
                        <div className=' col-span-5 sm:col-span-2'>
                            <p className=' text-primary font-semibold'>Backend</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Node js</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Express js</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Next js</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Mongodb</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Mongoose</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Json Web Token</p>
                        </div>
                        <div className=' col-span-5 sm:col-span-2'>
                            <p className=' text-primary font-semibold'>Operation/Devops</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Linux</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Docker</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Kubernetes</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Ansible</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>Jenkins</p>
                            <p className=' my-1 sm:my-2 text-sm text-primary'>AWS EC2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
