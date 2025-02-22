import React from 'react'
import HeroSection from '../modules/HeroSection'
import AboutSection from '../modules/AboutSection'
import LandingCard from '../modules/LandingCard'
import Features from '../modules/Features'
import TeamMembers from '../modules/TeamMembers'
import Faq from '../modules/Faq'
import Footer from '../modules/Footer'
import CustomNavbar from '../modules/Navbar'
import { Components } from '../modules/Screens'

export const Home = () => {

  return (
    <>
      

      <CustomNavbar />
      <HeroSection />
      <AboutSection />
      <LandingCard />
      <Components/>
      <Features />
      <TeamMembers />
      <Faq />
      <Footer />
    </>
  )
}
