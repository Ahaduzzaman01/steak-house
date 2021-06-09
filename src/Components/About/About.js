import React from 'react';
import aboutImg from '../../images/steak-for-bg1.jpg';

const About = () => {
    return (
        <section id="about" className="py-14">
            <h1 className="text-4xl font-medium text-center">About Us</h1>
            <div className="container flex flex-wrap justify-center items-center mt-5">
                <div className="xl:w-2/4 lg:w-2/5">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="xl:w-2/4 lg:w-2/5 p-4">
                    <h1 className="font-bold text-4xl mb-4">We Provide Good Food For Your Family!</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia porro velit itaque veritatis ullam doloribus minima voluptate maxime magnam est minus similique et modi, molestias obcaecati voluptatem recusandae eveniet eos vero! Dolorum dolor minus rerum quas nulla fugit praesentium fuga nam cum voluptas rem voluptate iste eius obcaecati, omnis magnam!</p>
                </div>
            </div>
        </section>
    );
};

export default About;