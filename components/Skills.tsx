import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export default function Skills() {
    const [playAnimatiion, setPlayAnimation] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            let scroll = this.scrollY;
            let div = this.document.getElementById("Skills");
            let divBottomdistance = div?.offsetTop
            let divHight = div?.scrollHeight
            let divdistance = 0
            if (divBottomdistance && divHight) {
                divdistance = divBottomdistance - divHight
            }
            if (scroll >= divdistance) {
                setPlayAnimation(true)
            } else {
                setPlayAnimation(false)
            }
        });
    }, [])


    return (
        <div id='Skills' className=' w-full px-5 py-10'>
            <div className=' max-w-[1000px] mx-auto'>
                <p className=' text-primary font-bold text-lg sm:text-xl  md:text-3xl text-center '>Skills:</p>
                <div className=' w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 sm:mt-10'>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>HTML</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[90%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>90%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>CSS</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[70%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>70%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Tailwind CSS</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[80%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>80%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Javascript</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[80%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>80%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>React JS</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[75%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>75%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Next JS</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[70%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>70%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Node JS</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[80%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>80%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Express JS</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[90%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>90%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>MongoDB</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[80%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>80%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Mongoose</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[80%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>80%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Linux</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[80%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>80%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Docker</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[70%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>70%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Kubernetes</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[70%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>70%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Jenkins</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[70%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>70%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Ansible</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[60%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>60%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Terraform</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[50%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>50%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>Nagious</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[50%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>50%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>AWS EC2</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[90%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>90%</p>
                        </div>
                    </div>
                    <div className=' w-full grid grid-cols-12 gap-5 items-center'>
                        <div className=' text-right col-span-4'>
                            <p className=' font-bold text-blue-500'>AWS S3</p>
                        </div>
                        <div className=' col-span-6 w-full customInsetShadow'>
                            <AnimateKeyframes
                                play={playAnimatiion}
                                duration={1}
                                keyframes={["width: 100%", "width: 0"]}
                            >
                                <div className=' w-[90%] h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded'></div>
                            </AnimateKeyframes>
                        </div>
                        <div className=' col-span-2'>
                            <p className=' font-medium text-primary'>90%</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
