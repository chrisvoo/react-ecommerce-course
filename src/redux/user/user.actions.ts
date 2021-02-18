export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export type SetUserAction = {
    type: typeof SET_CURRENT_USER
    payload?: ShopUser
}

export interface ShopUserData {
    displayName: string
    email: string
    createdAt: Date
}

export interface ShopUser extends ShopUserData {
    id: string
}

// Union type for all user actions
export type UserActionTypes = SetUserAction

export const setCurrentUser = (user?: ShopUser): UserActionTypes => ({
    type: SET_CURRENT_USER,
    payload: user,
})