import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { DirectoryState } from '../../components/directory/DirectoryMenu'

const selectDirectory = (state: RootState) => state.directory;

// memoized selector
export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory: DirectoryState) => directory.sections
);

export type CurrentDirectory = ReturnType<typeof selectDirectorySections>;