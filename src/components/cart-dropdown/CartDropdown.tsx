import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cart-item/CartItem';
import { RootState } from '../../redux/root-reducer';
import { PreviewItem } from '../../redux/cart/cart-types';


const Cart = ({ cartItems }: CartProps) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map((cartItem: PreviewItem) => 
                <CartItem key={cartItem.id} item={cartItem} />)
        }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state: RootState) => ({
    cartItems: state.cart.cartItems
})

const connector = connect(mapStateToProps);

type CartProps = ConnectedProps<typeof connector>;

export default connector(Cart);
