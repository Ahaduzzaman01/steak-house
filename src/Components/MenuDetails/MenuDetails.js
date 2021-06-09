import React from 'react';
import './MenuDetails.css';

const MenuDetails = ({ menu }) => {
    return (
        <div className="lg:w-3/12 sm:w-2/5 m-3 custom-menu-card rounded-3xl border" style={{backgroundColor: "#f4fffd"}}>
            <div className="p-3">
                <div className="menu-image">
                    <img style={{height: "200px"}} className="rounded-3xl w-auto m-auto" src={menu.img} alt="" />
                </div>
                <div className="menu-text pt-3">
                    <h4 className="text-2xl font-semibold">{menu.name}</h4>
                    <p className="py-2">{menu.foodDetail}</p>
                    <div className="rating-container flex">
                        <img className="w-7" src={menu.rating} alt="" />
                        <img className="w-7" src={menu.rating} alt="" />
                        <img className="w-7" src={menu.rating} alt="" />
                        <img className="w-7" src={menu.rating} alt="" />
                        <img className="w-7" src={menu.rating} alt="" />
                    </div>
                    <div className="flex justify-between items-center content-center">
                        <div>
                        <h5 className="text-xl font-bold">$ {menu.price}</h5>
                        </div>
                        <div className="bg-yellow-400 py-2 px-4 rounded-lg cursor-pointer text-center">
                        <img className="w-6" src={menu.cart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDetails;