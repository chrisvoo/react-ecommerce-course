import React, { FC } from 'react';
import MenuItem from '../menu-item/MenuItem';
import { connect, ConnectedProps } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/root-reducer';
import './DirectoryMenu.scss';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

export type DirectorySection = {
    title: string
    imageUrl: string
    id: number
    linkUrl: string
    size?: string
}

export type DirectoryState = {
    sections: DirectorySection[]
}

/**
 * Component<MyProps, MyState>
 */
 const DirectoryMenu: FC<DirectoryMenuProps> = ({ sections }) => {
    return (
        <div className="directory-menu">
            {
                sections.map((section: DirectorySection) => 
                    <MenuItem 
                        key={section.id} 
                        {...section}
                    />)
            }
        </div>
    );  
}

const mapStateToProps = createStructuredSelector<RootState, DirectoryState>({
    sections: selectDirectorySections
});

const connector = connect(mapStateToProps);
type DirectoryMenuProps = ConnectedProps<typeof connector>;

export default connector(DirectoryMenu);