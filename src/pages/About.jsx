import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import Banner from "../components/Elements/Banner";
import CardSection from "../components/Layouts/About/CardSection";
import Explanation from "../components/Layouts/About/Explanation";
import VisiMisi from "../components/Layouts/About/VisiMisi";
import Reason from "../components/Layouts/About/Reason";
import Questions from "../components/Layouts/About/Questions";
import Team from "../components/Layouts/About/Team";
import Timeline from "../components/Layouts/About/Timeline";
import Slogan from "../components/Layouts/About/Slogan";

const About = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="About Us"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo"
        image="/public/img/banner/about.jpg"
      />
      <main>
        <CardSection />
        <Explanation />
        <VisiMisi />
        <Reason />
        <Questions />
        <Slogan />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </>
  );
};

export default About;
