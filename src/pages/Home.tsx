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
const backgroundVideo = "/videos/backgroundvideo.mp4";

export const Home = () => {

  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: "-1" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
