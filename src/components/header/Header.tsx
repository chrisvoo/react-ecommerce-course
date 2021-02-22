import React from 'react';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
// special syntax for importing SVG: https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { RootState } from '../../redux/root-reducer';
import { ShopUser } from '../../redux/user/user.actions';

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

const mapStateToProps = createStructuredSelector<RootState, { currentUser: ShopUser | undefined, hidden: boolean }>({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const connector = connect(mapStateToProps);

type MappedProps = ConnectedProps<typeof connector>;

export default connector(Header);