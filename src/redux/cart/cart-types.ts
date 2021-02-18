export type CartActionsType = 'TOGGLE_CART_HIDDEN' | 'ADD_ITEM';

const CartActions = {
    TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
    ADD_ITEM: 'ADD_ITEM'
};

export type PreviewItem = {
    id: number
    name: string
    imageUrl: string
    price: number
    quantity?: number
}

export type CartState = {
    hidden: boolean
    cartItems: PreviewItem[]
}

export type SetCartAction = {
    type: keyof CartActionsType
    payload: CartState
}

export default CartActions;