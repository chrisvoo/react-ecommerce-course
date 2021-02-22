import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import { PreviewItem } from '../../redux/cart/cart-types';
import { RootState } from '../../redux/root-reducer';
import './CheckOutPage.scss';

const CheckOutPage: FC<MappedProps> = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => cartItem.name)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector<RootState, { cartItems: PreviewItem[], total: number }>({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const connector = connect(mapStateToProps);

type MappedProps = ConnectedProps<typeof connector>;

export default connector(CheckOutPage);