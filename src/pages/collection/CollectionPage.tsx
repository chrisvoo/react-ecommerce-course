import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { RootState } from '../../redux/root-reducer';
import { selectCollection } from '../../redux/shop/shop-selectors';
import './CollectionPage.scss';

const CollectionPage: FC<CollectionPageProps> = ({ collection }) => {
    if (!collection) {
       return (
        <div className='collection-page'>
            <h2>Ups! Cannot find any collection</h2>
        </div>
       );
    }

    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps<{ collectionId: string }>) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) // currying
})
const connector = connect(mapStateToProps);
type CollectionPageProps = ConnectedProps<typeof connector>

export default connector(CollectionPage);