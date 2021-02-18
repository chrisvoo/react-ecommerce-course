import CartActionTypes, { PreviewItem } from './cart-types';

export type SetCartAction = {
    type: typeof CartActionTypes.TOGGLE_CART_HIDDEN | typeof CartActionTypes.ADD_ITEM
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