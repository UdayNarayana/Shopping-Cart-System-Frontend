import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <React.Fragment>

            <nav className="navbar">

                <p className="nav-title">EShopping Zone</p>
                <ul className="nav-items">
                    <Link className="links" to='/'><li className="nav-item">Home</li></Link>
                    <li className="nav-item">e-Wallet</li>
                    <Link className="links" to='/cart'><li className="nav-item">Cart</li></Link>
                </ul>

                <Link className="link" to='/login'>
                    <button className="lgn-sgp-btn">Login/SignUp</button>
                </Link>
            </nav>


        </React.Fragment>
    )
}

export default Navbar;