import { useState, createContext, useEffect } from "react";

export const NeophyteContext = createContext();

function NeophyteProvider(props) {
    
    const [cart, setCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const localStorageCart = localStorage.getItem("Neophyte-cart");

    useEffect(() => {
        const rawData = localStorage.getItem("Neophyte_USER");
        if (rawData) {
            setIsLoggedIn(true);
            let localData = JSON.parse(rawData);
            console.log("User is logged in:", isLoggedIn);
        }
    }, [setIsLoggedIn]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        let cartData = [...cart];
        let checkDataExist = cartData.find((data) => {
            return data._id === product._id;
        });
        if (checkDataExist) {
             alert("Product already in cart");
            return;
        }
        alert("Product added to cart");
        let newProduct = { ...product, qty: 1, totalPrice: product.price };
        cartData.push(newProduct);
        setCart(cartData);
        localStorage.setItem("Neophyte-cart", JSON.stringify(cartData)); // Save cart data to localStorage
    };
    

    useEffect(() => {
        const localStorageCart = localStorage.getItem("Neophyte-cart");
        console.log("localStorageCart in useEffect:", localStorageCart);
        if (localStorageCart) {
            setCart(JSON.parse(localStorageCart));
        }
    }, []);
    

    // Update localStorage whenever cart changes
    useEffect(() => {
        console.log("Updating localStorage with cart:", cart);
        localStorage.setItem("Neophyte-cart", JSON.stringify(cart));
    }, [cart]);

    

    return (
        <NeophyteContext.Provider value={{
            cart, setCart, addToCart, isLoggedIn, setIsLoggedIn
           
        }}>
            {props.children}
        </NeophyteContext.Provider>
    )
}

export default NeophyteProvider;
