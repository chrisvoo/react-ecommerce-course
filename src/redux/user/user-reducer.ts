import { ShopUser, UserActionTypes, SET_CURRENT_USER } from "./user.actions";
import { Reducer } from 'redux';

export type UserState = {
    currentUser?: ShopUser;
}

const INITIAL_STATE: UserState = {
    currentUser: undefined,
}

export type UserReducer = Reducer<UserState, UserActionTypes>

const userReducer: UserReducer = (state: UserState = INITIAL_STATE, action: UserActionTypes): UserState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state;    
    }
}

export default userReducer;