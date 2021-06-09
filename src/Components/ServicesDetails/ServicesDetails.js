import React from 'react';

const ServicesDetails = ({ service }) => {
    return (
        <div className=" bg-white lg:w-1/4 sm:w-2/5 border-2 rounded-lg border-gray-900 border-opacity-40 p-7 m-3">
            <div className="w-2/5 m-auto pb-6">
                <img src={service.img} alt="" />
            </div>
            <div className="text-center">
                <h1 className="pb-6 text-xl font-medium">{service.heading}</h1>
                <p>{service.text}</p>
            </div>
        </div>
    );
};

export default ServicesDetails;