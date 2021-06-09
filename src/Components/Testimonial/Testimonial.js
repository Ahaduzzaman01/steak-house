import React from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import person1 from '../../images/person1.jpg';
import person2 from '../../images/person2.jpg';
import person3 from '../../images/person3.jpg';
import star from '../../images/icons/star.png';


const testimonialData = [
    {
        img: person1,
        name: "David",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veniam laborum nesciunt aliquid sint tenetur.",
        rating: star,
    },
    {
        img: person2,
        name: "Robert",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veniam laborum nesciunt aliquid sint tenetur.",
        rating: star,
    },
    {
        img: person3,
        name: "George",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veniam laborum nesciunt aliquid sint tenetur.",
        rating: star,
    }
]


const Testimonial = () => {
    return (
        <section id="testimonial" className="bg-yellow-200 py-5">
            <h1 className="text-4xl font-medium text-center">CUSTOMERS FEEDBACK</h1>
            <div className="container flex flex-wrap justify-center mt-5">
                {
                    testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                }
            </div>
        </section>
    );
};

export default Testimonial;