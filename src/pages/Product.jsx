import React from "react";
import Navbar from "../components/template/navbar/Navbar";
import Footer from "../components/template/footer/footer";
import PromoBanner from "../components/Layouts/Product/PromoBanner";
import ProductView from "../components/Layouts/Product/ProductView";

const Product = () => {
    return (
        <>
        <Navbar />
        <PromoBanner />
        <main>
            <ProductView />
        </main>
        <Footer />
        </>
    )
}

export default Product;