import React, { useEffect, useState } from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';

function BestSellers({ data }) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const productIds = ["65abf4743b88d36925ae237a", "65a7b63e3b88d36925ae1c33", "65a91ddf3b88d36925ae1ed4", "65a7d3313b88d36925ae1cdc"];
  
      const fetchProducts = async () => {
        try {
          const fetchedProducts = [];
  
          for (const productId of productIds) {
            const response = await fetch(`http://159.65.21.42:9000/product/${productId}`);
            const product = await response.json();
            fetchedProducts.push(product);
          }
  
          setProducts(fetchedProducts);
          // console.log("Fetched products:", fetchedProducts);
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
        <div className="mt-5">
          <div className="custom-width-section">
            <p className="best-sellers fs-3">Best Sellers</p>
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
      );
}
export default BestSellers;