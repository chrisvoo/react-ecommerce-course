import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducers';

const Reducers = {
    user: userReducer,
    cart: cartReducer,
}

const rootReducer = combineReducers(Reducers);

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;