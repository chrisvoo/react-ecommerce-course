import { PreviewItem } from "./cart-types";

export const addItemToCart = (cartItems: PreviewItem[], item: PreviewItem) => {
    const existingItem: PreviewItem | undefined = cartItems.find(i => i.id === item.id);

    if (existingItem) {
        // we need to return a new array to trigger the rerendering
        return cartItems.map(i => 
            i.id === item.id
            ? { ...i, quantity: (i.quantity ?? 0) + 1 }
            : i
        );
    }

    return [...cartItems, { ...item, quantity: 1 }];
}