import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Action, Dispatch } from 'redux';
import CustomButton from '../custom-button/CustomButton';
import { PreviewItem } from '../../redux/cart/cart-types';
import { addItem } from '../../redux/cart/cart-actions';
import './CollectionItem.scss';

export type CollectionItemProps = CollectionProps & {
    item: PreviewItem
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

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    addItem: (item: PreviewItem) => dispatch(addItem(item))
})

const connector = connect(null, mapDispatchToProps);

type CollectionProps = ConnectedProps<typeof connector>;

export default connector(CollectionItem);