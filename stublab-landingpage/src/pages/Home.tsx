import React from 'react'
import HeroSection from '../modules/HeroSection'
import AboutSection from '../modules/AboutSection'
import LandingCard from '../modules/LandingCard'
import Features from '../modules/Features'

export const Home = () => {
  return (
  <>
    <HeroSection />
    <AboutSection/>
    <LandingCard/>
    <Features/>
  </>
  )
}
