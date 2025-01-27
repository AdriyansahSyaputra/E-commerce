import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import Details from "../components/Layouts/BlogDetail/Details";

const BlogDetail = () => {
    return (
        <>
        <Navbar />
        <main className="px-4 md:px-20 lg:px-40">
            <Details />
        </main>
        <Footer />
        </>
    )
}

export default BlogDetail;