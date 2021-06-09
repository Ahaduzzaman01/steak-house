import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
    return (
        <section id="contact" className="text-white" style={{ backgroundColor: "#48BFA9" }}>
            <div className="container flex flex-wrap items-center py-12">
                <div className="md:w-1/3">
                    <h1 className="footer-logo-text text-5xl">Steak House</h1>
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est nihil optio iste recusandae. Earum eaque et culpa libero ut! Voluptate accusamus sunt delectus labore eligendi ipsa natus eum, illum omnis ducimus dolores nesciunt blanditiis</p>

                    <div className="my-2">
                        <a className="text-3xl mr-4" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="text-3xl mr-4" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="text-3xl mr-4" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a className="text-3xl mr-4" href="$"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a className="text-3xl mr-4" href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    </div>
                    <h4>+1-202-555-0131</h4>
                </div>
                <div className="md:w-1/3 m-auto text-center p-2">
                    <h1 className="text-2xl font-medium">Our Address</h1>
                    <p>150 2th Ave, Los Angeles, LA 32018</p>
                    <p>United States</p>
                </div>
                <div className="md:w-1/3 m-auto text-center p-2">
                    <h1 className="text-2xl font-medium">OUR OPENING HOURS</h1>
                    <p>Daily: 9am – 10pm</p>
                </div>
            </div>
            <p className="text-center pb-3">Copyright © 2021 Steak House. - All rights reserved.</p>
        </section>
    );
};

export default Footer;