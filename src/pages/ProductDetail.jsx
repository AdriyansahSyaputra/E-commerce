import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import Details from "../components/Layouts/ProductDetail/Details";

const ProductDetail = () => {
    return(
        <>
        <Navbar />
        <main className="px-4 md:px-10 lg:px-16 my-6">
            <Details />
        </main>
        <Footer />
        </>
    )
}

export default ProductDetail;