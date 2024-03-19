import React from "react";
import Brand from "./brands";
import Selling from "./selling";
import Category from "./category";
import Foundation from "./foundation";
import Product from "./tranding";
import Block from "./ad-block";
import Review from "./review";
import Mail from "./mail";
import Headbottom from "./header";
import Banner from "./banner";
import Footer from "./footer";

const Home = () => {
    return (
        <>
            <Headbottom/>
            <Banner/>
            <Selling />
            <Category />
            <Foundation />
            <Product />
            <Block />
            <Review />
            <Mail />
            <Brand />
            <Footer/>
        </>
    );
}
export default Home;