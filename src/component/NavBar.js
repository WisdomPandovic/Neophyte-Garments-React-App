import React, { useState, useEffect, useContext } from 'react';
import './NavBar.css'; 
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { NeophyteContext } from './Context/NeophyteContext';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isLoggedIn, cart } = useContext(NeophyteContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${scrolled ? 'bg-dark' : 'bg-light'}`}>
      <div className="container">
        <a href="/" className={`navbar-brand ${scrolled ? 'text-white' : 'text-dark'}`}><h1>NEOPHYTE</h1></a>
        <button className={`navbar-toggler ${scrolled ? 'text-white' : 'text-dark'}`} type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className={`navbar-nav mx-auto ${scrolled ? 'text-white' : 'text-dark'}`}>
            <a href="/MenCollectionPage" className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`}>Men</a>
            <a href="/WomenWear" className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`}>Women</a>
            <a href="/SneakersCollection" className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`}>Sneakers</a>
            <a href="/ShopWears" className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`}>Shop</a>
            <div className="nav-item dropdown hoverable-dropdown">
            <a className={`nav-link dropdown-toggle ${scrolled ? 'text-white' : 'text-dark'}`} href="#" role="button" onClick={toggleDropdown}>
                Collections
              </a>
              <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <a className="dropdown-item" href="/SwimSuit"><p className="text-uppercase">Swim Suit</p></a>
                <a className="dropdown-item" href="/Jewelry"><p className="text-uppercase">Jewelry</p></a>
                <a className="dropdown-item" href="/WeddingCollection"><p className="text-uppercase">Wedding Collection</p></a>
              </div>
            </div>
            <a href="/About" className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`}>About</a>
           
          </div>
          <div className={`social-icons d-lg-none ${scrolled ? 'text-white' : 'text-dark'}`}>
          {isLoggedIn ? (
            <Link className="nav-link mx-2" to="/UserInformation" id="userLink"><FaUser /></Link>
            ) : (
              <Link className="nav-link mx-2" to="/SignUpPage" id="userLink"><FaUser /></Link>
            )
          }
          <a className="nav-link d-flex" href="/cart">
            <div><FaShoppingCart /></div> 
            <h2 className='cart-count'>{cart.length}</h2>
          </a>
          </div>
        </div>
        <div className={`social-icons d-none d-lg-flex ${scrolled ? 'text-white' : 'text-dark'}`}>
        
          {isLoggedIn ? (
            <Link className="nav-link mx-2" to="/UserInformation" id="userLink"><FaUser /></Link>
            ) : (
              <Link className="nav-link mx-2" to="/SignUpPage" id="userLink"><FaUser /></Link>
            )
          }
          <a className="nav-link d-flex" href="/cart">
            <div><FaShoppingCart /></div> 
            <h2 className='cart-count'>{cart.length}</h2>
          </a>             
        </div>
      </div>
    </nav>
  );
}

export default NavBar;