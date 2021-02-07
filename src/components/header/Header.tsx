import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
// special syntax for importing SVG: https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import { ShopUserData } from '../../App';

export type HeaderProps = {
    currentUser: ShopUserData | null
}

const Header = ({ currentUser }: HeaderProps) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser 
                    ? <Link className="option" onClick={() => auth.signOut()} to="/">SIGN OUT</Link>
                    : <Link className="option" to="/signin">SIGN IN</Link>  
                }
            </div>
        </div>
    );
}

export default Header;