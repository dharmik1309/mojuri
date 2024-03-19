import React from "react";
import Headbottom from "../header";
import Map from "./map";
import Chead from "./contact-head";
import Footer from "../footer";
import Cneed from "./need";
import Chelp from "./help";
import Cform from "./form";

const Contact = () => {
    return (
        <>
            <Headbottom/>
            <Chead/>
            <Map/>
            <Cneed/>
            <Chelp/>
            <Cform/>    
            <Footer/>
            
        </>
    );
}
export default Contact;