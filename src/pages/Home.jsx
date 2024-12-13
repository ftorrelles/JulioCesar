import React from "react";
import ContentHome from "../components/ContentHome";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Testimonials from "../components/Testimonial";
// import BlogPosts from "../components/BlogPosts";
import Gallery from "../components/Gallery";
import Blog from "../components/Blog";
import ContactSection from "../components/ContactSection";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <ContentHome />
      <AboutUs />
      <Services />
      <Team />
      <Testimonials />
      <Gallery />
      <Blog />
      <ContactSection />
    </>
  );
};

export default Home;
