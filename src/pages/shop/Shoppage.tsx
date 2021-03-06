import React, { FC } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/root-reducer';
import { selectCollections } from '../../redux/shop/shop-selectors';
import CollectionsOverview from '../../components/collection-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

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

export type ShopPageState = {
    collections: Record<string, Collection>
}

const ShopPage: FC<ShopPageProps & RouteComponentProps> = ({ match }) => 
 (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
 );

const mapStateToProps = createStructuredSelector<RootState, ShopPageState>({
    collections: selectCollections
});

const connector = connect(mapStateToProps);
type ShopPageProps = ConnectedProps<typeof connector>;

export default connector(ShopPage);