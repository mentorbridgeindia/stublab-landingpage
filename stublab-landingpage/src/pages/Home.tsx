import React from 'react'
import HeroSection from '../modules/HeroSection'
import AboutSection from '../modules/AboutSection'
import LandingCard from '../modules/LandingCard'
import Features from '../modules/Features'
import TeamMembers from '../modules/TeamMembers'
import { Container } from 'react-bootstrap'
import Faq from '../modules/Faq'

export const Home = () => {
  const backgroundVideo = "/videos/backgroundvideo.mp4";
  return (
    <Container fluid className="position-relative   " style={{ minHeight: "100vh", overflow: "hidden" }}>
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
      <HeroSection />
      <AboutSection />
      <LandingCard />
      <Features />
      <TeamMembers />
      <Faq/>
    </Container>
  )
}
