import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { UserState } from './user-reducer';

const selectUser = (state: RootState) => state.user;

// memoized selector
export const selectCurrentUser = createSelector(
    [selectUser],
    (user: UserState) => user.currentUser
);

export type CurrentUser = ReturnType<typeof selectCurrentUser>;