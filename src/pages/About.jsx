import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import Banner from "../components/Elements/Banner";
import AboutUs from "../components/Layouts/About/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="About Us"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo"
        image="/public/img/banner.png"
      />
      <main>
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default About;
