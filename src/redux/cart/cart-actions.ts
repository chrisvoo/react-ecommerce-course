import CartActionTypes, { PreviewItem } from './cart-types';


export interface SetCartAction {
    type: typeof CartActionTypes.TOGGLE_CART_HIDDEN
    payload?: PreviewItem
}

// payload is an optional property, we do not need one in this case
export const toggleCartHidden = (): SetCartAction => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item: PreviewItem): SetCartAction => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item: PreviewItem): SetCartAction => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item: PreviewItem): SetCartAction => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})