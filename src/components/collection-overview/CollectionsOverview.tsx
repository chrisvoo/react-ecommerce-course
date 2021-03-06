import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/CollectionPreview';
import { RootState } from '../../redux/root-reducer';

import './CollectionsOverview.scss';
import { ShopPageState } from '../../pages/shop/Shoppage';
import { selectCollections } from '../../redux/shop/shop-selectors';

const CollectionsOverview: FC<CollectionProps> = ({ collections }) => (
    <div className="collections-overview">
    {
        Object.values(collections).map(({ id, ...props }) => 
            <CollectionPreview key={id} {...props} />
        )
    }
    </div>
);

const mapStateToProps = createStructuredSelector<RootState, ShopPageState>({
    collections: selectCollections
});

const connector = connect(mapStateToProps);

type CollectionProps = ConnectedProps<typeof connector>;

export default connector(CollectionsOverview);