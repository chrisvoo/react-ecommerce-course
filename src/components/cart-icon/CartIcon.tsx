import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { connect, ConnectedProps } from 'react-redux';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }: CartIconProps) => (
    <div className="cart-icon">
        <ShoppingIcon
            className="shopping-icon"
            onClick={toggleCartHidden}
        />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const connector = connect(null, mapDispatchToProps);

type CartIconProps = ConnectedProps<typeof connector>;

export default connector(CartIcon);