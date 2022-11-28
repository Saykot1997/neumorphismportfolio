import React from 'react'
import Aboutme from '../components/Aboutme'
import Achievement from '../components/Achievement'
import ClientFeedBack from '../components/ClientFeedBack'
import ContactMe from '../components/ContactMe'
import Education from '../components/Education'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import IdeaSolution from "../components/IdeaSolution"
import Footer from '../components/Footer'

function index() {
  return (
    <div className=" min-h-screen w-full bg-[#e9f1fb] px-5 pt-16 sm:pt-20 sm:px-10 md:px-20">
      <Navbar />
      <HeroSection />
      <Achievement />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Education />
      <ClientFeedBack />
      <ContactMe />
      <IdeaSolution />
      <Footer />
    </div>
  )
}

export default index