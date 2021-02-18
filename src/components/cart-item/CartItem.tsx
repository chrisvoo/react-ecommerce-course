import React from 'react';
import { PreviewItem } from '../../redux/cart/cart-types';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }: { item: PreviewItem }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem;