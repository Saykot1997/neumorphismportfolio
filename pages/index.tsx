import React from 'react'
import Aboutme from '../components/Aboutme'
import Achievement from '../components/Achievement'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

function index() {
  return (
    <div className=" min-h-screen w-full bg-[#e9f1fb] px-20">
      <Navbar />
      <HeroSection />
      <Achievement />
      <Aboutme />
    </div>
  )
}

export default index