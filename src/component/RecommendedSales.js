import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import slide4 from '../images/Neophyte-garment-images (7).jpg';
import slide5 from '../images/Neophyte-garment-images (3).jpg';

const RecommendedSales = () => {
    return (
        <div>
            <section className="custom-width-section py-5 category">
                <div className="row">
                    <div className="col-lg-6">
                        <p className="reco">Recommend for you</p>
                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-dark text-white p-3 text-center text-decoration-none rounded" href="#">All Categories</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                 <a className="d-block bg-secondary text-white p-3 text-center text-decoration-none rounded" href="women-wear.html">Women</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-success text-white p-3 text-center text-decoration-none rounded" href="men-collection.html">Men</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-danger text-white p-3 text-center text-decoration-none rounded" href="#">Collection 2024</a>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <a className="d-block bg-warning text-white p-3 text-center text-decoration-none rounded" href="#newArrivals">New Arrays</a>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <a className="d-block bg-info text-white p-3 text-center text-decoration-none rounded" href="#">Winter Set</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="recommended-sales" className="mt-5">
            <div className="custom-width-section">
                <p className="best-sellers fs-3">Recommended Sales</p>

                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="h-100 position-relative">
                           <img className="d-block w-100 custom-image-ratio" src={slide4} alt="First slide"/>
                            <FaHeart className="heart-icon" />
                            <div className="d-flex justify-content-between card-body p-3 mb-4">
                                <div>
                                    <p className="card-text overflow-hidden mt-2">Top View Women Jacket</p>
                                    <p className="price">$520</p>
                                </div>

                                <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                                    <FaArrowRight className="text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-4">
                        <div className="h-100 position-relative">
                            <img className="d-block w-100 custom-image-ratio" src={slide5} alt="First slide"/>
                            <FaHeart className="heart-icon" />
                            <div className="d-flex justify-content-between card-body p-3">
                                <div>
                                    <p className="card-text overflow-hidden mt-2">Nkunzi Jacket</p>
                                    <p className="price">$420</p>
                                </div>

                                <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                                   <FaArrowRight className="text-white" />
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

export default RecommendedSales;
