import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Banner from "../components/Elements/Banner";
import Footer from "../components/template/footer/footer";
import ContactSection from "../components/Layouts/Contact/ContactSection";

const ContactUs = () => {
    return (
        <>
        <Navbar />
        <Banner image="/public/img/banner/about.jpg" title="Contact Us" subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo" />
        <main className="my-20 px-4 md:px-10">
            <ContactSection />
        </main>
        <Footer />
        </>
    )
}

export default ContactUs;