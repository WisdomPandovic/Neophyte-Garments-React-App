import { useState, createContext, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const NeophyteContext = createContext();

function NeophyteProvider(props) {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Retrieve cart data on mount and update state (using async/await)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const rawData = localStorage.getItem("Neophyte_USER");
        if (rawData) {
          setIsLoggedIn(true);
          let localData = JSON.parse(rawData);
          console.log("User is logged in:", isLoggedIn);
        }

        const storedCart = await localStorage.getItem("Neophyte-cart");
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Error retrieving cart data:", error);
      }
    };

    fetchInitialData(); // Call the async function within useEffect
  }, []);

  // Function to add a product to the cart
  const addToCart = async (product) => {
    let cartData = [...cart];
    let checkDataExist = cartData.find((data) => data._id === product._id);

    if (checkDataExist) {
      // alert("Product already in cart");
      toast.success("Product already in cart");
      return;
    }

    // alert("Product added to cart");
    toast.success("Product added to cart");
    let newProduct = { ...product, qty: 1, totalPrice: product.price };
    cartData.push(newProduct);

    setCart(cartData); // Update state first

    try {
      await localStorage.setItem("Neophyte-cart", JSON.stringify(cartData));
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };
  
  const removeFromCart = (product) => {
    // Ask for confirmation
    if (window.confirm("Are you sure you want to remove this product?")) {
      try {
        let initialCart = JSON.parse(localStorage.getItem("Neophyte-cart")) || [];
  
        // Filter out the product to be removed
        const updatedCart = initialCart.filter((item) => item._id !== product._id);
  
        // Update cart state and localStorage **only if confirmed**
        setCart(updatedCart);
        localStorage.setItem("Neophyte-cart", JSON.stringify(updatedCart));
      } catch (error) {
        console.error("Error removing product from cart:", error);
        // Handle the error appropriately, e.g., display an error message to the user
      }
    }
  };
  
  // Update localStorage whenever cart changes (no need for a separate function)
  useEffect(() => {
    try {
      if (cart.length > 0) { // Only save if cart has items
        localStorage.setItem("Neophyte-cart", JSON.stringify(cart));
      }
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  }, [cart]);

  return (
    <NeophyteContext.Provider value={{ cart, setCart, addToCart, removeFromCart, isLoggedIn, setIsLoggedIn, toast }}>
      {props.children}
    </NeophyteContext.Provider>
  );
}

export default NeophyteProvider;
