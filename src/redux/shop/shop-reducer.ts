import { Action, Reducer } from 'redux';
import SHOP_DATA from '../../pages/shop/shop.data';
import { ShopPageState} from '../../pages/shop/Shoppage';

const INITIAL_STATE: ShopPageState = {
    collections: SHOP_DATA,
}

export type ShopReducer = Reducer<ShopPageState, Action<null>>

const shopReducer: ShopReducer = (state: ShopPageState = INITIAL_STATE, action: any): ShopPageState => {
    switch (action.type) {
        default:
            return state;    
    }
}

export default shopReducer;