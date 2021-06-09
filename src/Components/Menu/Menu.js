import React from 'react';
import MenuDetails from '../MenuDetails/MenuDetails';
import star from '../../images/icons/star.png';
import cart from '../../images/icons/cart.png';
import filetMignon from '../../images/filetMignon.jpg';
import ribEye from '../../images/ribeye.jpg';
import londonBroil from '../../images/londonBroil.jpeg';
import tBone from '../../images/T-bone.jpg';
import Tomahawk from '../../images/Tomahawk.jpeg';
import hanger from '../../images/hanger.webp';
import rumpSteak from '../../images/rumpSteak.jpg';
import denverCut from '../../images/denverCut.jpg';
import flatIron from '../../images/flatIron.jpg';

const menuData = [
    {
        img: filetMignon,
        name: "Filet Mignon",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 12.99,
        cart: cart,
    },
    {
        img: ribEye,
        name: "Rib Eye",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 22.99,
        cart: cart,
    },
    {
        img: londonBroil,
        name: "London Broil",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 17.99,
        cart: cart,
    },
    {
        img: tBone,
        name: "T-bone Steak",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 27.99,
        cart: cart,
    },
    {
        img: Tomahawk,
        name: "Tomahawk",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 18.99,
        cart: cart,
    },
    {
        img: hanger,
        name: "Hanger",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 21.99,
        cart: cart,
    },
    {
        img: rumpSteak,
        name: "Rump Steak",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 24.99,
        cart: cart,
    },
    {
        img: denverCut,
        name: "Denver Cut",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 22.99,
        cart: cart,
    },
    {
        img: flatIron,
        name: "Flat Iron",
        foodDetail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, quibusdam porro.",
        rating: star,
        price: 23.99,
        cart: cart,
    },
]


const Menu = () => {
    return (
        <section id='menu' className="py-14">
            <h1 className="text-4xl font-medium text-center">OUR POPULAR DISHES</h1>
            <div className="container flex flex-wrap justify-center mt-5">
                {
                    menuData.map(menu => <MenuDetails menu={menu}></MenuDetails>)
                }
            </div>
        </section>
    );
};

export default Menu;