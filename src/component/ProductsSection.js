import React, { useEffect, useState } from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import product1 from '../images/Neophyte-loafers (1).jpg';
import product2 from '../images/Neophyte-garment-images (2).webp';
import product3 from '../images/Neophyte-garment-men-swimsuit (2).jpg';
import product4 from '../images/Neophyte-garment-images (3).webp';

const ProductsSection = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const productIds = ["65a99dc93b88d36925ae2027", "65a7d1c53b88d36925ae1ccf", "65af959f3b88d36925ae2b8b", "65af9ccd3b88d36925ae2bb6"];
  
      const fetchProducts = async () => {
        try {
          const fetchedProducts = [];
  
          for (const productId of productIds) {
            const response = await fetch(`http://159.65.21.42:9000/product/${productId}`);
            const product = await response.json();
            fetchedProducts.push(product);
          }
  
          setProducts(fetchedProducts);
        //   console.log("Fetched products:", fetchedProducts);
        } catch (error) {
          console.error("Error fetching products:", error);
          setError(error);
        }finally {
            setIsLoading(false);
        }
      };
  
      fetchProducts();
    }, []);

    if (isLoading) {
      return <p>Loading products...</p>;
    }
  
    if (error) {
      return <p>Error fetching products: {error.message}</p>;
    }

    return (
        <div>

            <section className="styled-section">
                <div className="content">
                    <h2>Shop Now</h2>
                    <p>Browse Through Our Outdoor Collection</p>
                    <a href="shop.html" className="btn btn-dark">Explore</a>
                </div>
            </section>

            <div className="mt-5">
          <div className="custom-width-section">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="h-100">
                  <img src={`http://159.65.21.42:9000${product.image}`} alt={product.name} className='img-fluid rounded-4 product-image' />
                    <FaHeart className="heart-icon" />
                    <div className="d-flex justify-content-between card-body p-3">
                      <div>
                        <p className="card-text overflow-hidden mt-2">{product.name}</p>
                        <p className="price">$ {product.price}</p>
                      </div>
                        <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
                            <a href={`/ViewProduct/${product._id}`} className="text-white"><FaArrowRight /></a>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>

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
                                    <p className="price">$ 620</p>
                                </div>
                                <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
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
                                    <p className="price">$ 620</p>
                                </div>
                                <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
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
                                    <p className="price">$ 620</p>
                                </div>
                                <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
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
                                    <p className="price">$ 620</p>
                                </div>
                                <div className="d-flex align-items-center bg-success p-3 rounded-circle" style={{ width: "50px", height: "50px" }}>
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

export default ProductsSection;