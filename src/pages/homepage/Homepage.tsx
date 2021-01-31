import React from 'react';
import { DirectoryMenu } from '../../components/directory/DirectoryMenu';
import './Homepage.scss';

export const Homepage = () => {
    return (
        <div className="homepage">
            <DirectoryMenu /> 
        </div>
    );
}