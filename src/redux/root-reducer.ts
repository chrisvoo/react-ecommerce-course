import { Action, combineReducers } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // by default, it's localStorage
import userReducer, { UserState } from './user/user-reducer';
import cartReducer from './cart/cart-reducers';
import directoryReducer from './directory/directory-reducer';
import { Reducer } from 'react';
import { SetUserAction } from './user/user.actions';
import { CartState, SetCartAction } from './cart/cart-types';
import { DirectoryState } from '../components/directory/DirectoryMenu';
import shopReducer from './shop/shop-reducer';
import { ShopPageState } from '../pages/shop/Shoppage';

export type CombinedReducers = {
    user: Reducer<UserState, SetUserAction>
    cart: Reducer<CartState, SetCartAction>
    directory: Reducer<DirectoryState, Action<null>>
    shop: Reducer<ShopPageState, Action<null>>
}

export type PersistConf = PersistConfig<RootState> & {
    whitelist: [keyof CombinedReducers]
}

const persistConfig: PersistConf = {
    key: 'root', // starts to store from the root
    storage,
    whitelist: ['cart']
}

const Reducers: CombinedReducers = {
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
}

const rootReducer = combineReducers(Reducers);

export type RootState = ReturnType<typeof rootReducer>

export default persistReducer(persistConfig, rootReducer);