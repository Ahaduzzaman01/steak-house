import React from 'react';
import food from '../../images/icons/food.png';
import restaurant from '../../images/icons/restaurant.png';
import telephone from '../../images/icons/telephone.png';
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const serviceData = [
    {
        img: food,
        heading: "BEST QUALITY FOOD",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos minus quo exercitationem!"
    },
    {
        img: restaurant,
        heading: "NET AND CLEAN ENVIRONMENT",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos minus quo exercitationem!"
    },
    {
        img: telephone,
        heading: "EASY TO ORDER",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos minus quo exercitationem!"
    }
]

const Services = () => {
    return (
        <section id="services" className="bg-yellow-200 py-5">
            <h1 className="text-4xl font-medium text-center">THE SERVICES WHAT WE PROVIDE</h1>
            <div className="container flex flex-wrap justify-center mt-5">
                {
                    serviceData.map(service => <ServicesDetails service={service}></ServicesDetails>)
                }
            </div>
        </section>
    );
};

export default Services;