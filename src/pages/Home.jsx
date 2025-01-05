import React, { useState } from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import Banner from "../components/Layouts/Home/Banner";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="lg:px-8">
        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
