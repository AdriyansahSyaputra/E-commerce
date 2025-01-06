import React, { useState } from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import Banner from "../components/Layouts/Home/Banner";
import CardCategory from "../components/Layouts/Home/CardCategory";

const Home = () => {
  return (
    <>
      <Navbar />
        <Banner />
        <main>
          <CardCategory />
        </main>
      <Footer />
    </>
  );
};

export default Home;
