import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Banner from "../components/Elements/Banner";
import Footer from "../components/template/footer/footer";
import BlogsSection from "../components/Layouts/Blog/BlogsSection";
import TrendingBlog from "../components/Layouts/Blog/TrendingBlog";

const Blog = () => {

    return (
        <>
        <Navbar />
        <Banner image="/public/img/banner/about.jpg" title="Contact Us" subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo" />
        <main className="px-4 md:px-10 md:flex my-20 md:gap-10">
            <BlogsSection />
            <TrendingBlog />
        </main>
        <Footer />
        </>
    )
}

export default Blog;