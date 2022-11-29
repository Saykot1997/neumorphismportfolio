import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMe() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const sendData = async () => {
        if (!name || !email || !phone || !message) {
            toast.warn("Please enter all data")
            return
        }
        const data = {
            name,
            email,
            phone,
            message
        }
        const link = "https://sheet.best/api/sheets/ffe84df9-2a8b-42b7-bc73-20c876205940"
        try {
            const res = await axios.post(link, data)
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            toast.success("Data saved")
        } catch (error: any) {
            toast.error(error.response.data.message)
            console.log(error)
        }
    }


    return (
        <div id='contact-me' className=' w-full px-5 py-5 sm:py-10'>
            <div className=' max-w-[1000px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div className=' w-full'>
                        <p className=' text-primary text-lg font-bold text-center mb-2'>Contact Me:</p>
                        <div>
                            <div className=' grid grid-cols-12 gap-2 my-5 items-center'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Name</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Type your name here' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                            <div className=' grid grid-cols-12 gap-2 my-5 items-center'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Email</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='example@gamil.com' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                            <div className=' grid grid-cols-12 gap-2 my-5 items-center'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Phone</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <input type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='+8801837-49****' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                            <div className=' grid grid-cols-12 gap-2 mt-5'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'>Message</p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder='Message' className=' placeholder:text-gray-400 py-2 px-4 text-sm focus:outline-none customInsetShadow2 rounded-md bg-gray-100 w-full' />
                                </div>
                            </div>
                            <div className=' grid grid-cols-12 gap-2 mt-5'>
                                <p className=' col-span-10 sm:col-span-2 text-blue-500 font-semibold sm:text-right'></p>
                                <div className=' col-span-12 sm:col-span-10'>
                                    <button onClick={sendData} className=' text-primary font-semibold bg-[#edeef3] w-full py-2 sm:py-3 rounded customShadow hover:scale-105 transition-all duration-200 ease-linear'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full'>
                        <div className=' w-full'>
                            <Image src="/contact-me.png" className=' w-full h-full ' alt="" title="" width={700} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
