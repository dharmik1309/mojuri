import React from "react";
import Abselling from "./Abselling";
import Abpast from "./Abpast";
import Abjewellers from "./Abjewellers";
import Abknow from "./Abknow";
import Abtestimonials from "./Abtestimonials";
import Abmail from "./Abmail";
import Abbrands from "./Abbrands";
import Headbottom from "./header";
import Banner from "./banner";
import Footer from "./footer";

const About = () => {
    return (
        <>
            <Headbottom/>
            <Banner/>
            <Abselling />
            <Abpast />
            <Abjewellers />
            <Abknow />
            <Abtestimonials />
            <Abmail/>
            <Abbrands/>
            <Footer/>
        </>
    )
}

export default About;