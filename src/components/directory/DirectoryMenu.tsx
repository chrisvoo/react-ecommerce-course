import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import SECTIONS_DATA from './sections.data';
import './DirectoryMenu.scss';

export type DirectorySection = {
    title: string
    imageUrl: string
    id: number
    linkUrl: string
    size?: string
}

export type DirectorySections = {
    sections: DirectorySection[]
}

export type DirectoryState = Readonly<DirectorySections>

/**
 * Component<MyProps, MyState>
 */
export default class DirectoryMenu extends Component<any, DirectoryState> {
    constructor(props: any) {
        super(props);

        this.state = {
            sections: SECTIONS_DATA,
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map((section: DirectorySection) => 
                      <MenuItem 
                        key={section.id} 
                        {...section}
                      />)
                }
            </div>
        );  
    }
}