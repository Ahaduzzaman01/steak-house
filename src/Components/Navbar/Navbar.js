import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-yellow-400 fixed w-full">
                <div className="container-fluid container">
                    <a className="navbar-brand nav-logo-text text-3xl" href="#home">Steak House</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#menu">Menu</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#testimonial">Review</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;