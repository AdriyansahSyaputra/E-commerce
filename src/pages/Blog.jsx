import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Banner from "../components/Elements/Banner";
import Footer from "../components/template/footer/footer";
import BlogsSection from "../components/Layouts/Blog/BlogsSection";
import TrendingBlog from "../components/Layouts/Blog/TrendingBlog";
import Categories from "../components/Layouts/Blog/Categories";
import articles from "../utils/articles";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Banner
        image="/public/img/banner/about.jpg"
        title="Our Blogs"
        subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo"
      />
      <main className="px-4 md:px-10 my-20">
        {/* Mobile View */}
        <div className="lg:hidden">
          <Categories />
          <TrendingBlog articles={articles} />
          <BlogsSection articles={articles} />
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex md:gap-10">
          <BlogsSection articles={articles} />
          <div>
            <Categories />
            <TrendingBlog articles={articles} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
