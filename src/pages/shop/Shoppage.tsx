import React, { Component } from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';

export type CollectionItem = {
    id: number
    name: string
    imageUrl: string
    price: number
}

export type Collection = {
    id: number
    title: string
    routeName: string
    items: CollectionItem[]
}

export type ShopPageCollections = {
    collection: Collection[]
}

export type ShopPageState = Readonly<ShopPageCollections>

export default class Shoppage extends Component<any, ShopPageState> {
    constructor(props: any) {
        super(props);

        this.state = {
            collection: ShopData,
        }
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collection.map(({ id, ...props }) => 
                      <CollectionPreview key={id} {...props} />
                    )
                }
            </div>
        );
    }
}