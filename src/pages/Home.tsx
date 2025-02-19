import React from 'react'
import HeroSection from '../modules/HeroSection'
import AboutSection from '../modules/AboutSection'
import LandingCard from '../modules/LandingCard'
import Features from '../modules/Features'
import TeamMembers from '../modules/TeamMembers'
import { Container, Nav } from 'react-bootstrap'
import Faq from '../modules/Faq'
import Footer from '../modules/Footer'
import CustomNavbar from '../modules/Navbar'

export const Home = () => {
  return (
    <>
    
    <CustomNavbar/>
      <HeroSection />
      <AboutSection />
      <LandingCard />
      <Features />
      <TeamMembers />
      <Faq/>
      <Footer/>
      </>
  )
}
