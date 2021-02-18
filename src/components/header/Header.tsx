import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
// special syntax for importing SVG: https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { ShopUser } from '../../redux/user/user.actions';
import { RootState } from '../../redux/root-reducer';
 
type MappedProps = {
    currentUser?: ShopUser,
    hidden: boolean
}

const Header = ({ currentUser, hidden }: MappedProps) => {
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
                    ? <Link className="option" onClick={() => auth.signOut()} to="/">SIGN OUT ({currentUser.displayName})</Link>
                    : <Link className="option" to="/signin">SIGN IN</Link>  
                }
                <CartIcon />
            </div>
            { !hidden && <CartDropdown /> }
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header);