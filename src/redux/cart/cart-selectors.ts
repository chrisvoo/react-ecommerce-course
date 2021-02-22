import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { CartState, PreviewItem } from './cart-types';

// input selector
const selectCart = (state: RootState) => state.cart;

// memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart: CartState) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart: CartState) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc: number, curVal: PreviewItem) => 
        (curVal.quantity ?? 0) + acc, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc: number, curVal: PreviewItem) => 
    (curVal.quantity ?? 0) * curVal.price + acc, 0)
)