import React from 'react';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className=" bg-white lg:w-1/4 sm:w-2/5 rounded-lg border-gray-900 border-opacity-40 p-3 shadow-xl m-3">
            <div className="pb-6">
                <img className="rounded-lg" src={testimonial.img} alt="" />
            </div>
            <div className="text-center">
                <h1 className="pb-1 text-xl font-medium">{testimonial.name}</h1>
                <p>"{testimonial.review}"</p>
                <div className="flex justify-center">
                <img className="w-7" src={testimonial.rating} alt="" />
                <img className="w-7" src={testimonial.rating} alt="" />
                <img className="w-7" src={testimonial.rating} alt="" />
                <img className="w-7" src={testimonial.rating} alt="" />
                <img className="w-7" src={testimonial.rating} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;