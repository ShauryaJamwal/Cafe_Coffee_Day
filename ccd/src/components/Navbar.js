import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <a href="https://www.cafecoffeeday.com/">
                    <img src="https://www.cafecoffeeday.com/sites/all/themes/ccd/assets/images/common/logo.png" class="img-responsive" width="65" height="90" alt="Café Coffee Day" title="Café Coffee Day"/>
                </a>
                </Link>
            </div> 
        </nav>
        </>
    )
}

export default Navbar
