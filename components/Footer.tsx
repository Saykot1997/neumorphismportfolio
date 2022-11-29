import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className=' pb-5 w-full flex justify-center items-center'>
            <div className=' flex gap-3 items-center'>
                <a href="https://www.facebook.com/saykot.hossain.1/" target={"_blank"} rel="noreferrer">
                    <div className=' h-8 w-8 customShadow transition-all duration-150 ease-linear hover:scale-105 cursor-pointer p-1 rounded flex items-center justify-center'>
                        <Image src="/facebook.png" className=' w-full h-full ' alt="" title="" width={70} height={70} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/shohel-mia-b72560234/" target={"_blank"} rel="noreferrer">
                    <div className=' h-8 w-8 customShadow transition-all duration-150 ease-linear hover:scale-105 cursor-pointer p-2 rounded flex items-center justify-center'>
                        <Image src="/linkedin.png" className='  ' alt="" title="" width={70} height={70} />
                    </div>
                </a>
                <a href="https://github.com/Saykot1997" target={"_blank"} rel="noreferrer">
                    <div className=' h-8 w-8 customShadow transition-all duration-150 ease-linear hover:scale-105 cursor-pointer p-1 rounded flex items-center justify-center'>
                        <Image src="/github.png" className=' w-full h-full ' alt="" title="" width={70} height={70} />
                    </div>
                </a>
            </div>
        </div>
    )
}
