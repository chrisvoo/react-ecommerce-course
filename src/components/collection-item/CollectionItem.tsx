import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import { PreviewItem, SetCartAction } from '../../redux/cart/cart-types';
import { addItem } from '../../redux/cart/cart-actions';
import './CollectionItem.scss';

export interface CollectionItemProps {
    item: PreviewItem
    addItem: (item: PreviewItem) => SetCartAction 
};

const CollectionItem = ({ item, addItem }: CollectionItemProps) => {
    const { /* id, */ name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>    
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: PreviewItem) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);