import React from 'react'
import CollectionItem from '../collection-item/CollectionItem';
import { PreviewItem } from '../../redux/cart/cart-types';
import './CollectionPreview.scss';

export type PreviewCollectionProps = {
    title: string
    items: PreviewItem[]
}

const PreviewCollection = ({ title, items }: PreviewCollectionProps) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items
                      .filter((item, idx) => idx < 4)
                      .map((item) =>
                        <CollectionItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    );
}

export default PreviewCollection;