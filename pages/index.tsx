import React from 'react'
import Aboutme from '../components/Aboutme'
import Achievement from '../components/Achievement'
import Education from '../components/Education'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

function index() {
  return (
    <div className=" min-h-screen w-full bg-[#e9f1fb] px-20">
      <Navbar />
      <HeroSection />
      <Achievement />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Education />
    </div>
  )
}

export default index