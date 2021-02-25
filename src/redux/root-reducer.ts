import { Action, CombinedState, combineReducers } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // by default, it's localStorage
import userReducer, { UserState } from './user/user-reducer';
import cartReducer from './cart/cart-reducers';
import { Reducer } from 'react';
import { SetUserAction } from './user/user.actions';
import { CartState, SetCartAction } from './cart/cart-types';

export type CombinedReducers = {
    user: Reducer<UserState, SetUserAction>
    cart: Reducer<CartState, SetCartAction>
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
}

const rootReducer = combineReducers(Reducers);

export type RootState = ReturnType<typeof rootReducer>

export default persistReducer(persistConfig, rootReducer);