import React from 'react';
import product1 from '../../images/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdHAyMjktcG9zdGVyLTA1LTQ1Mi1wcy5qcGc.webp'
import NavBar from "../NavBar";
import NewArrivals from "../NewArrivals";
import ProductDisplay from "../ProductDisplay";

function ShopWears() {
    return (
        <div>
             <NavBar/>
             <section className="container-fluid p-0 mt-5">
            <div className="position-relative pt-5">
                <img src={product1} className="img-fluid bk" alt="shop Image" />
                <div className="overlay-text">
                    <h2 className="pt-5 text-dark">Indulge in a world of style and sophistication at our exclusive online shop.</h2>
                    <p> Discover curated collections that blend fashion-forward trends with timeless elegance. From chic apparel to must-have accessories, elevate your wardrobe with our carefully selected pieces. Immerse yourself in a shopping experience that caters to your unique style.</p>
                </div>
            </div>
            </section>

            <NewArrivals/>
            <ProductDisplay/>
        </div>
      
    );
}

export default ShopWears;
