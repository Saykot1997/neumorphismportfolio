import React from 'react'
import Image from 'next/image'

export default function ContactMe() {
    return (
        <div className=' w-full px-5 py-5 sm:py-10'>
            <div className=' max-w-[1200px] mx-auto'>
                <div className='  bg-[#edeef3] w-full pt-10 px-24 pb-5 rounded-md customShadow'>
                    <p className=' text-primary font-bold text-center text-2xl'>Brilent solution For your ideas</p>
                    <p className=' text-gray-700 text-sm text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className=' w-full h-4 border-t-2 border-dashed border-primary my-10'></div>
                    <div className=' grid grid-cols-10 gap-3'>
                        <div className=' col-span-4'>
                            <p className=' text-primary font-semibold'>About me</p>
                            <p className=' mt-2 text-sm text-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sint iusto voluptate perspiciatis quia numquam obcaecati eum, culpa, atque suscipit adipisci rerum corrupti aspernatur alias, quaerat eos! Optio, sapiente tempora?</p>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' text-primary font-semibold'>Home</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>

                        </div>
                        <div className=' col-span-2'>
                            <p className=' text-primary font-semibold'>Home lsjfls</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' text-primary font-semibold'>Home</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                            <p className=' my-2 text-sm text-primary'>Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
