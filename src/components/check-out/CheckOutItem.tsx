import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { PreviewItem } from '../../redux/cart/cart-types';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart-actions';
import './CheckOutItem.scss';

type CheckOutItemProps = { cartItem: PreviewItem } & MappedProps

const CheckOutItem: FC<CheckOutItemProps> = ({ dispatch, cartItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={
                    () => dispatch(removeItem(cartItem))
                }>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={
                    () => dispatch(addItem(cartItem))
                }>
                    &#10095;
                </div>
            </span>
            <span className='price'>${price}</span>
            <span className='remove-button' onClick={
                () => dispatch(clearItemFromCart(cartItem))
            }>
                &#10005;
            </span>
        </div>
    );
}

const connector = connect();

type MappedProps = ConnectedProps<typeof connector>;

export default connector(CheckOutItem);