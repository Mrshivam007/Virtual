import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { useEffect } from "react";

const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const closeMenu = () => {
		setShowMediaIcons(false);
	};
  return (
    <div>



      <header id="header" className="header  align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">

            <h1><span>V</span>isualizer</h1>
          </a>

          <nav className="main-nav">
            


            <div className={ showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <div class="borders-effects">
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/product" onClick={closeMenu}>Product</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>         
        </ul>
        </div>
 
            </div>


            <div className="social-media">
              <Link className="btn-book-a-table" to="/login">Login</Link>




              <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  {showMediaIcons ? <CloseIcon style={{fontSize: '30px'}} /> : <MenuIcon style={{fontSize: '30px'}} />}

                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>



      {/* <header id="header" className="header  align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">

            <h1><span>V</span>isualizer</h1>
          </a>
          <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
            <nav id="navbar" className="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          <Link className="btn-book-a-table" to="/login">Login</Link>
          {/* // <i id='mov' class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      // <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i> */}
          {/* <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <MenuIcon />
            </a>
          </div>
        </div>
      </header> */}
    </div>
  );
}

export default Header;