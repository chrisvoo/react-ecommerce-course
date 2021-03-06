import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';
import { ShopPageState } from '../../pages/shop/Shoppage';
import { RootState } from '../root-reducer';
// import SHOP_DATA from '../../pages/shop/shop.data';

const selectShop = (state: RootState) => state.shop;

// memoized selector
export const selectCollections = createSelector(
    [selectShop],
    (shop: ShopPageState) => shop.collections
);

/** This is not memoized due to collectionUrlParam being passed in from our collection
 * component's mapStateToProps running whenever our state changes and and calling a new instance
 * of our selectCollection function.
 * In this case collectionUrlParam is a dynamic argument meaning it can change, so to memoize
 * selectCollection we actually have to memoize the whole function using a memoize helper function.
 * We can leverage the lodash library, specifically their memoize helper function. memoize creates a 
 * function that memoizes the result of func. By default, the first argument provided to the memoized 
 * function is used as the map cache key. In this way, whenever this function gets called and receives
 * collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). 
 * If this function gets called again with the same collectionUrlParam, don't rerun this function because
 * we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
 */

export const selectCollection = memoize((collectionUrlParam: string) => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]// .find(c => c.id === COLLECTION_ID_MAP[collectionUrlParam])
));

export type ShopItems = ReturnType<typeof selectCollections>;