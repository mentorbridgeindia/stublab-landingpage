import AboutSection from "../modules/AboutSection";
import ContactSection from "../modules/ContactSection";
import Faq from "../modules/Faq";
import Features from "../modules/Features";
import Footer from "../modules/Footer";
import HeroSection from "../modules/HeroSection";
import LandingCard from "../modules/LandingCard";
import CustomNavbar from "../modules/Navbar";
import { Components } from "../modules/Screens";
import TeamMembers from "../modules/TeamMembers";
import VideoSection from "../modules/VideoSection";

const backgroundVideo = "/videos/backgroundvideo.mp4";
export const Home = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover"
        style={{ zIndex: "-1" }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <CustomNavbar />
      <HeroSection />
      <AboutSection />
      <LandingCard />
      <Components />
      <Features />
      <VideoSection demoLink={""} />
      <TeamMembers />
      <Faq />
      <ContactSection />
      <Footer />
    </>
  );
};
