import React, { useContext } from 'react';
import NavBar from "../NavBar";
import { NeophyteContext } from "../Context/NeophyteContext";

function Cart (){
    const { cart } = useContext(NeophyteContext);

    console.log("Cart component rerendered. Cart items:", cart);

    return(
        <div>
            <NavBar/>

            <div className="center-content mt-5">
                <div className="wishl-con">
        <div className="wishl-cont text-center">
            <div className="wishl-con1 pt-5">
                {/* <p>Your wishlist (<span id="wishListNum">0</span>)</p> */}
                <p>Your cart (<span id="cartItemCount">{cart.length}</span>)</p>
            </div>

            <div className="wishl-con2">
                <p>Add items to your wishlist to view or compare them later. </p>
            </div>

            <div className="wishl-con3">
                <button className="btn btn-dark">
                    <a className="nav-link" href="shop.html">START SHOPPING</a>
                </button>
            </div>
        </div>
                </div>
            </div>

        </div>
    )
}
export default Cart;