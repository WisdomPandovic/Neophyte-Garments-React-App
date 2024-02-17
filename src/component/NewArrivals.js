import React from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import product1 from '../images/Neophyte-sneakers (13).webp';
import product2 from '../images/Neophyte-women-wedding-dress (6).webp';
import product3 from '../images/Neophyte-loafers (12).jpg';
import product4 from '../images/Neophyte-man-dress-suit (1).webp';

const NewArrivals = () => {
    return (
        <div>
            <section id="newArrivals">
        <div className="custom-width-section mt-5">
            <p  className="best-sellers">New Arrivals</p>
        </div>
    </section>
            <section id="products-section" className="mt-5">
            <div className="custom-width-section">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="h-100">
                            <img src={product1} className="img-fluid rounded-4 product-image" alt="Product 1" />
                            <FaHeart className="heart-icon" />
                            <div className="d-flex justify-content-between card-body p-3">
                                <div>
                                    <p className="card-text overflow-hidden mt-2">Textured Tracksuit Set</p>
                                    <p className="price">$620</p>
                                </div>
                                <div className="d-flex align-items-center p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                                    <FaArrowRight className="text-dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="h-100">
                            <img src={product2} className="img-fluid rounded-4 product-image" alt="Product 1" />
                            <FaHeart className="heart-icon" />
                            <div className="d-flex justify-content-between card-body p-3">
                                <div>
                                    <p className="card-text overflow-hidden mt-2">Textured Tracksuit Set</p>
                                    <p className="price">$620</p>
                                </div>
                                <div className="d-flex align-items-center p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                                    <FaArrowRight className="text-dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="h-100">
                            <img src={product3} className="img-fluid rounded-4 product-image" alt="Product 1" />
                            <FaHeart className="heart-icon" />
                            <div className="d-flex justify-content-between card-body p-3">
                                <div>
                                    <p className="card-text overflow-hidden mt-2">Textured Tracksuit Set</p>
                                    <p className="price">$620</p>
                                </div>
                                <div className="d-flex align-items-center p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                                    <FaArrowRight className="text-dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="h-100">
                            <img src={product4} className="img-fluid rounded-4 product-image" alt="Product 1" />
                            <FaHeart className="heart-icon" />
                            <div className="d-flex justify-content-between card-body p-3">
                                <div>
                                    <p className="card-text overflow-hidden mt-2">Textured Tracksuit Set</p>
                                    <p className="price">$620</p>
                                </div>
                                <div className="d-flex align-items-center p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                                    <FaArrowRight className="text-dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}

export default NewArrivals;
