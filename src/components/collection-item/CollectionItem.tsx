import React from 'react';
import './CollectionItem.scss';

export type PreviewItem = {
    id: number
    name: string
    imageUrl: string
    price: number
}

const CollectionItem = (({ id, name, price, imageUrl }: PreviewItem) => 
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
    </div>
);

export default CollectionItem;