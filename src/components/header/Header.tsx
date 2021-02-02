import React from 'react';
import { Link } from 'react-router-dom';
// special syntax for importing SVG: https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
            </div>
        </div>
    );
}

export default Header;