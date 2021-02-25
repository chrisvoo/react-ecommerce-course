import { Reducer } from 'redux';
import CartActionTypes, { CartState, SetCartAction, PreviewItem } from "./cart-types";
import { addItemToCart, removeItem } from './cart-utils';

const INITIAL_STATE: CartState = {
    hidden: true,
    cartItems: []
}

export type CartReducer = Reducer<CartState, SetCartAction>

const cartReducer: CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload as unknown as PreviewItem),
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload as unknown as PreviewItem),
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            const selectedItem = action.payload as unknown as PreviewItem;
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== selectedItem.id),
            }                              
        default:
            return state;
    }
}

export default cartReducer;