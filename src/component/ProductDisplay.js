import React, { useState, useEffect } from 'react';

function ProductDisplay() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from different categories
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            // Fetch products from Neophytegarments category
            const response1 = await fetch('http://159.65.21.42:9000/products/Neophytegarments');
            const data1 = await response1.json();

            // Fetch products from Neophytegarment-SwimSuit category
            const response2 = await fetch('http://159.65.21.42:9000/products/Neophytegarment-SwimSuit');
            const data2 = await response2.json();

            // Fetch products from Neophytegarments-Sneakers category
            const response3 = await fetch('http://159.65.21.42:9000/products/Neophytegarments-Sneakers');
            const data3 = await response3.json();

            // Combine products from all categories
            const combinedProducts = [...data1, ...data2, ...data3];
            
            // Set the combined products to state
            setProducts(combinedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div>
            <h2>Products</h2>
            <div className="product-container">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDisplay;
