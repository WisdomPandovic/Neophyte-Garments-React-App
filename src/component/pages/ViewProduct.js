import React, { useState, useEffect, useContext } from 'react';
import NavBar from "../NavBar";
import BestSellers from "../BestSellers";
import { useParams } from "react-router-dom";
import { NeophyteContext } from "../Context/NeophyteContext";
import Footer from "../Footer";

function ViewProduct() {
    const { _id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(NeophyteContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://159.65.21.42:9000/product/${_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        if (_id) {
            fetchProduct();
        }
    }, [_id]);

    if (!product) {
        return <div>Loading...</div>; // You can replace this with a loading spinner or skeleton UI
    }

    return (
        <div>
            <NavBar />
            <div className="container text-center mt-5">
                <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className='img-fluid mt-5 img' />
                <div className="mt-5">
                    <h2 className="shop-p1x">{product.name}</h2>
                    <p className="amt">₦ {product.price}</p>
                    <button className="btn btn-primary text-uppercase custom-add-to-cart rounded-0" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="border p-3">
                            <h3>Additional Information</h3>
                            <p className="shop-p2x">{product.description}</p>
                            <p>Shipping calculated at checkout.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="border p-3">
                            <h3>Customer Reviews</h3>
                            <p>Reviews and comments from customers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <BestSellers/>
            <Footer />
        </div>
    );
}

export default ViewProduct;
